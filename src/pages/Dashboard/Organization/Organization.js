import React from 'react';
import appStore from '../../../store/appStore';

const Organization = () => (
  <div>
    <h1>Organization</h1>
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

export default Organization;
