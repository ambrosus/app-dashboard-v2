import { makeAutoObservable, runInAction } from 'mobx';
import { storageClear } from '../services/storage.service';
import { getAssets } from '../services/assets.service';

export class AppStore {
  auth = false;

  newAsset = [];

  assets = [];

  constructor() {
    makeAutoObservable(this);
  }

  getStoreAssets() {
    getAssets().then((assets) => {
      runInAction(() => {
        this.assets = assets.data;
      });
      console.log('this.assets', this.assets);
    });
  }

  setNewAsset(assetData) {
    runInAction(() => {
      this.newAsset = assetData;
    });
  }

  login() {
    setTimeout(() => {
      runInAction(() => {
        this.auth = true;
      });
    }, 100);
  }

  logout() {
    setTimeout(() => {
      runInAction(() => {
        this.auth = false;
        storageClear();
      });
    }, 100);
  }

  resetStore = () => {
    runInAction(() => {
      this.auth = true;
    });
  };
}

const appStore = new AppStore();
export default appStore;
