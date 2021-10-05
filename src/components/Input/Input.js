/*eslint-disable*/
import React from 'react';
import * as PropTypes from 'prop-types';

const Input = ({ label, register, required }) => {
  return (
    <div className="input">
      {label && <label className="input--label">{label}</label>}
      <input type="text" {...register(label, { required })} />
    </div>
  );
};

export default Input;
