import { makeAutoObservable, runInAction } from 'mobx';

export class AppStore {
  auth = true;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.auth = bool;
  }

  resetStore = () => {
    runInAction(() => {
      this.auth = true;
    });
  };
}

const appStore = new AppStore();
export default appStore;
