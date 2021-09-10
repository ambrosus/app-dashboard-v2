/*eslint-disable*/
import React from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react-lite';

const Request = observer(() => {
  const history = useHistory();
  return <div>Request</div>;
});
export default Request;
