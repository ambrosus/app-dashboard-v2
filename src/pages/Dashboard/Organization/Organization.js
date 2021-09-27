import React from 'react';
import { useHistory } from 'react-router';

import appStore from '../../../store/appStore';

const Organization = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Organization</h1>
      <button
        type="button"
        onClick={() => {
          appStore.logout();
          history.push('/dashboard/login');
        }}
      >
        <h1>SET AUTH</h1>
      </button>
    </div>
  );
};

export default Organization;
