import React from 'react';
import cx from 'classnames';
import * as PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

function Input({
  inputFocusOutHandler,
  inputFocusOut,
  type,
  icon,
  className,
  ...props
}) {
  const inputClassName = cx('input', className);
  return (
    <div className="default">
      <input
        onBlur={() => inputFocusOutHandler(!inputFocusOut)}
        {...props}
        type={type}
        className={inputClassName}
      />
      {icon && (
        <span className="icon">
          <ReactSVG src={icon} wrapper="span" />
        </span>
      )}
    </div>
  );
}
Input.propTypes = {
  inputFocusOutHandler: PropTypes.func,
  inputFocusOut: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.object,
};
export default Input;
