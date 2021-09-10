/*eslint-disable*/
import React from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';

const OwnKey = observer(() => {
  const history = useHistory();
  return <div>OwnKey</div>;
});
export default OwnKey;
