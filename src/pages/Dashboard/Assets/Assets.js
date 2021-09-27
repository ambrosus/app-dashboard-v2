import React from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';

import appStore from '../../../store/appStore';

const Assets = observer(() => {
  const history = useHistory();

  return (
    <div>
      <h1>Assets</h1>
      <button
        type="button"
        onClick={() => {
          appStore.logout();
          history.push('/dashboard/login');
        }}
      >
        <h1>logout</h1>
      </button>
    </div>
  );
});

export default Assets;
