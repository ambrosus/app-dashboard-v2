/*eslint-disable*/
import * as AmbrosusSDK from 'ambrosus-javascript-sdk';
import { storageGet } from './storage.service';
import { fetchAPI } from '../api/fetchAPI';
import { messageServiceError } from './message.service';
import Web3 from 'web3';
import { environment } from '../environments/enviroment.prod';

let ambrosus;

const initSDK = () => {
  const secret = storageGet('secret');
  const token = storageGet('token');

  ambrosus = new AmbrosusSDK({
    secret,
    Web3,
    headers: {
      Authorization: `AMB_TOKEN ${token}`,
    },
  });
};

export const getAssets = async (limit = 15, next = '') => {
  initSDK();
  const account = storageGet('account') || {};
  const { organization } = account;

  let url = `${environment.api.extended}`;

  const token = storageGet('token');

  const httpOptions = {
    headers: {
      Authorization: `AMB_TOKEN ${token}`,
      Accept: 'application/json',
    },
    method: 'POST',
    body: {
      query: [
        {
          field: 'organizationId',
          value: organization,
          operator: 'equal',
        },
      ],
      limit,
      next,
    },
  };

  const assets = await fetchAPI(url, '/asset2/query', httpOptions);
  if (assets.error) {
    messageServiceError(assets.error);
    return;
  }
  return assets;
};
