/*eslint-disable*/
import * as moment from 'moment-timezone';
import * as AmbrosusSDK from 'ambrosus-javascript-sdk';
import Web3 from 'web3';

import { AccountsService, getAccount } from './accounts.service';
import { environment } from '../environments/environment';
import { fetchAPI } from '../api/fetchAPI';
import { storageClear, storageGet, storageSet } from './storage.service';

const sdk = new AmbrosusSDK({ Web3 });
const web3 = new Web3();
const api = environment.api;
const url = api.extended;

export const isLoggedIn = () => {
  const account = storageGet('account') || {};
  const secret = storageGet('secret');

  return !!(account.address && secret);
};

export const getToken = () => {
  const secret = storageGet('secret');
  const validUntil = moment().add(5, 'days').unix();
  return secret ? sdk.getToken(secret, validUntil) : null;
};

export const verifyAccount = async (privateKey = '', address = '') => {
  let _address = address;
  if (privateKey) {
    try {
      _address = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    } catch (e) {
      throw new Error('Private key is invalid');
    }
  }

  const account = await fetchAPI(url, `/account/${_address}/exists`);
  if (account.error) {
    throw account.error;
  }
  if (account.data !== true) {
    throw new Error('Account not found');
  }

  return account.data;
};

export const login = async (email, password) => {
  const secretToken = await fetchAPI(url, `/account/secret`, { email });
  if (secretToken.error) {
    throw secretToken.error;
  }

  try {
    console.log('[GET] PrivateKey token: ', secretToken.data);
    let token = secretToken.data.token;
    token = JSON.parse(atob(token));
    const [address, privateKey] = decryptPrivateKey(token, password);
    if (!address) {
      throw new Error('Password is incorrect');
    }

    storageSet('secret', privateKey);
    storageSet('token', getToken());

    const account = await getAccount(address);

    console.log('[GET] Account: ', account);
    storageSet('account', account);
    AccountsService(account);
    // this.router.navigate(['/dashboard/assets']);

    return account;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  storageClear();
  // this.router.navigate(['/login']);
};

// UTILS

export const decryptPrivateKey = (token, password) => {
  try {
    const { address, privateKey } = web3.eth.accounts.decrypt(token, password);
    return [address, privateKey];
  } catch (e) {
    return [null];
  }
};

export const privateKeyToAccount = (privateKey) => {
  try {
    const address = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    return address;
  } catch (e) {
    return null;
  }
};
