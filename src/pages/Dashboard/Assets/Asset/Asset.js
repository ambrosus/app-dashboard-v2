import React from 'react';
import { useParams } from 'react-router';

const Asset = () => {
  const params = useParams();
  return (
    <div>
      <h1>Asset {params.assetId}</h1>
    </div>
  );
};

export default Asset;
