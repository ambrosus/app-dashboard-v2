/*eslint-disable*/
import storageService from './storage.service';
import * as moment from 'moment-timezone';
import { AccountsService, getAccount } from './accounts.service';
import { environment } from '../environments/environment';
import * as AmbrosusSDK from 'ambrosus-javascript-sdk';
import Web3 from 'web3';
import { fetchAPI } from '../api/fetchAPI';

class AuthService {
  sdk;
  web3;
  api;
  signupAddress = '';
  inviteId;
  url;

  constructor() {
    this.sdk = new AmbrosusSDK({ Web3 });
    this.web3 = new Web3();
    this.api = environment.api;
    this.url = this.api.extended;
  }

  isLoggedIn() {
    const account = storageService.get('account') || {};
    const secret = storageService.get('secret');

    return !!(account.address && secret);
  }

  getToken() {
    const secret = storageService.get('secret');
    const validUntil = moment().add(5, 'days').unix();
    return secret ? this.sdk.getToken(secret, validUntil) : null;
  }

  async verifyAccount(privateKey = '', address = '') {
    let _address = address;
    if (privateKey) {
      try {
        _address =
          this.web3.eth.accounts.privateKeyToAccount(privateKey).address;
      } catch (e) {
        throw new Error('Private key is invalid');
      }
    }

    const account = await fetchAPI(this.url, `/account/${_address}/exists`);
    if (account.error) {
      throw account.error;
    }
    if (account.data !== true) {
      throw new Error('Account not found');
    }

    return account.data;
  }

  async login(email, password) {
    const secretToken = await fetchAPI(this.url, `/account/secret`, { email });
    if (secretToken.error) {
      throw secretToken.error;
    }

    try {
      console.log('[GET] PrivateKey token: ', secretToken.data);
      let token = secretToken.data.token;
      token = JSON.parse(atob(token));
      const [address, privateKey] = this.decryptPrivateKey(token, password);
      if (!address) {
        throw new Error('Password is incorrect');
      }

      storageService.set('secret', privateKey);
      storageService.set('token', this.getToken());

      const account = await getAccount(address);

      console.log('[GET] Account: ', account);
      storageService.set('account', account);
      AccountsService(account);
      this.signupAddress = '';

      // this.router.navigate(['/dashboard/assets']);

      return account;
    } catch (error) {
      throw error;
    }
  }

  logout() {
    storageService.clear();
    // this.router.navigate(['/login']);
  }

  // UTILS

  decryptPrivateKey(token, password) {
    try {
      const { address, privateKey } = this.web3.eth.accounts.decrypt(
        token,
        password,
      );
      return [address, privateKey];
    } catch (e) {
      return [null];
    }
  }

  privateKeyToAccount(privateKey) {
    try {
      const address =
        this.web3.eth.accounts.privateKeyToAccount(privateKey).address;
      return address;
    } catch (e) {
      return null;
    }
  }
}

const authService = new AuthService();
export default authService;
