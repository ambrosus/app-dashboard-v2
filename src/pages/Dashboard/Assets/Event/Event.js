import React from 'react';
import { useHistory, useParams } from 'react-router';
import appStore from '../../../../store/appStore';

const Event = () => {
  const history = useHistory();

  const params = useParams();
  return (
    <div>
      <h1>Event{params.eventId}</h1>
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

export default Event;
