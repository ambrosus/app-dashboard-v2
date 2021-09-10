import React from 'react';
import appStore from '../../../store/appStore';

const Assets = () => (
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
);

export default Assets;
