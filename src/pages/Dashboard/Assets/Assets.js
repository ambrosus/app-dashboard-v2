import React from 'react';
import { observer } from 'mobx-react-lite';
import appStore from '../../../store/appStore';

const Assets = observer(() => (
  <div>
    <h1>Assets</h1>
    <button
      type="button"
      onClick={() => {
        appStore.setAuth(false);
      }}
    >
      <h1>SET AUTH</h1>
    </button>
  </div>
));

export default Assets;
