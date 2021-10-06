/*eslint-disable*/
import React from 'react';
import * as PropTypes from 'prop-types';
import SVGIcon from '../Input/SVGicon';

const Input = ({
  name,
  label,
  register,
  required,
  iconRight,
  placeholder,
  onclick,
  type = 'text',
}) => {
  return (
    <div className="input">
      {label && <label className="input--label">{label}</label>}
      <input
        autoComplete="off"
        required
        placeholder={placeholder}
        type={type}
        {...register(name, { required })}
      />
      {iconRight && (
        <SVGIcon
          onClick={onclick}
          className="iconRight"
          name={iconRight}
          fill="rgb(55, 53, 214)"
        />
      )}
    </div>
  );
};

export default Input;
