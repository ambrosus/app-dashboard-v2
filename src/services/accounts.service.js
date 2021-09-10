/*eslint-disable*/

import { BehaviorSubject } from 'rxjs';
import storageService from './storage.service';
import { environment } from '../environments/environment';
import * as AmbrosusSDK from 'ambrosus-javascript-sdk';
import { fetchAPI } from '../api/fetchAPI';
import Web3 from 'web3';

class AccountsService {
  _account = new BehaviorSubject({});
  sdk;
  api;
  url;

  constructor() {
    const account = storageService.get('account') || {};
    this._account.next(account);
    this.sdk = new AmbrosusSDK({ Web3 });
    this.api = environment.api;
    this.url = this.api.extended;
  }

  async getAccounts(next = '') {
    const accounts = await fetchAPI(this.url, `/account&next=${next}`);
    if (accounts.error) {
      throw accounts.error;
    }

    return accounts.data;
  }

  async getAccount(address) {
    const tok = storageService.get('token');
    const account = await fetchAPI(this.url, `/account/${address}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `AMB_TOKEN ${tok}`,
      },
    });
    if (account.error) {
      console.log(account.error);
      throw account.error;
    }
    console.log('account', account);
    return account.data;
  }

  async modifyAccount(address, body) {
    const account = await fetchAPI(
      this.url,
      `/account2/modify/${address}`,
      body,
    );
    if (account.error) {
      throw account.error;
    }

    return account.data;
  }
}

const accountsService = new AccountsService();
export default accountsService;
