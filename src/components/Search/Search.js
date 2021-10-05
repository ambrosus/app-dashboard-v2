import React from 'react';
import cx from 'classnames';
import * as PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

function Search({
  inputFocusOutHandler,
  inputFocusOut,
  type,
  icon,
  className,
  ...props
}) {
  const inputClassName = cx('search-input', className);
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
Search.propTypes = {
  inputFocusOutHandler: PropTypes.func,
  inputFocusOut: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.object,
};
export default Search;
