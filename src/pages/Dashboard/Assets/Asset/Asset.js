import React from 'react';
import { useParams } from 'react-router';
import appStore from '../../../../store/appStore';

const Asset = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Asset {params.assetId}</h1>
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
};

export default Asset;
