import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
  priority,
  type,
  buttonType,
  children,
  disabled,
  onclick,
  buttonStyles,
}) => {
  const cssClasses = className('btn', priority, type);
  return (
    <button
      /* eslint-disable-next-line */
      type={!buttonType && 'button'}
      disabled={disabled && disabled}
      onClick={onclick && onclick}
      className={cssClasses && cssClasses}
      style={buttonStyles && buttonStyles}
    >
      {children && children}
    </button>
  );
};
Button.propTypes = {
  disabled: PropTypes.bool,
  onclick: PropTypes.func,
  buttonStyles: PropTypes.object,
  priority: PropTypes.string,
  type: PropTypes.string,
  buttonType: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
