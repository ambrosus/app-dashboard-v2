/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default function Checkbox({
  disabled = false,
  name,
  label,
  checked,
  onChange,
}) {
  const handler = !disabled ? onChange : undefined;

  return (
    <span className="checkbox" onClick={handler}>
      <input
        className="checkbox-input"
        type="checkbox"
        name={name}
        id={`${name}-id`}
        disabled={disabled}
        checked={checked}
        onChange={handler}
        area-labelledby="checkbox-label"
      />
      <span className="checkbox-indicator" />
      <label className="checkbox-label" htmlFor={`${name}-id`}>
        {label}
      </label>
    </span>
  );
}
