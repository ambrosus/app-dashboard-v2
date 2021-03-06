import { environment } from '../environments/environment';
import { fetchAPI } from '../api/fetchAPI';
import { storageGet } from './storage.service';

const url = environment.api.extended;
export const AccountsService = (acc) => {
  const account = storageGet('account') || acc;
  return account;
};

export const getAccounts = async (next = '') => {
  const accounts = await fetchAPI(url, `/account&next=${next}`);
  if (accounts.error) {
    throw accounts.error;
  }

  return accounts.data;
};

export const getAccount = async (address) => {
  const tok = storageGet('token');
  const account = await fetchAPI(url, `/account/${address}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `AMB_TOKEN ${tok}`,
    },
  });
  if (account.error) {
    throw account.error;
  }
  return account.data;
};

export const modifyAccount = async (address, body) => {
  const account = await fetchAPI(url, `/account2/modify/${address}`, body);
  if (account.error) {
    throw account.error;
  }

  return account.data;
};
