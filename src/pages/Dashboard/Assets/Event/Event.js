import React from 'react';
import { useParams } from 'react-router';
import appStore from '../../../../store/appStore';

const Event = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Event{params.eventId}</h1>
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

export default Event;
