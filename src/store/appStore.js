import { makeAutoObservable, runInAction } from 'mobx';
import { storageClear, storageGet } from '../services/storage.service';

export class AppStore {
  auth = false;

  constructor() {
    makeAutoObservable(this);
  }

  isAuth() {
    setTimeout(() => {
      runInAction(() => {
        this.auth = typeof storageGet('account') === 'object';
      });
    }, 100);
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
