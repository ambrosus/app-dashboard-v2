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
initSDK();
export const getAssets = async (options = {}) => {
  let { limit, next } = options;
  const account = storageGet('account') || {};
  const { organization } = account;
  limit = limit || 15;
  next = next || '';

  let url = `${environment.api.extended}`;
  const token = storageGet('token');

  let httpOptions = {
    headers: {
      'Access-Control-Allow-Origin': ' *',
      'Content-Type': 'application/json',
      Authorization: `AMB_TOKEN ${token}`,
      Accept: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      query: [
        {
          field: 'organizationId',
          value: organization,
          operator: 'equal',
        },
      ],
      limit,
      next,
    }),
  };
  let assets = await fetchAPI(url, 'asset2/query', httpOptions);
  if (assets) {
    if (assets?.error) {
      messageServiceError(assets.error);
      return;
    }
    console.log('[GET] Assets: ', assets?.data);

    const ids =
      assets &&
      assets?.data.reduce((_ids, asset, index, array) => {
        _ids.push(asset.assetId);
        return _ids;
      }, []);

    // Get latest info events
    url = `${environment.api.extended}`;
    httpOptions = {
      headers: {
        'Access-Control-Allow-Origin': ' *',
        'Content-Type': 'application/json',
        Authorization: `AMB_TOKEN ${token}`,
        Accept: 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        assets: ids,
        type: 'ambrosus.asset.info',
      }),
    };
    const infoEvents = await fetchAPI(url, 'event2/latest/type', httpOptions);
    if (infoEvents?.error) {
      messageServiceError(infoEvents.error);
      return;
    }
    console.log('[GET] Info events: ', infoEvents?.data);

    // Connect assets with info events
    assets.data = assets?.data.map((asset) => {
      asset.info = infoEvents.data.find(
        (event) => asset.assetId === event.content.idData.assetId,
      );

      if (asset.info) {
        if (ambrosus) {
          asset.info = ambrosus.utils.findEvent('info', [asset.info]);
        }
      }

      return asset;
    });
    console.log('[ASSETS]:', assets);
    return assets;
  }
};
