import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const MHeader = ({ title, formOrJSON, setTabFunc }) => (
  <div className="m-header">
    <div className="m-header--title">{title}</div>
    {formOrJSON && (
      <div className="m-header--content">
        <p
          role="presentation"
          onClick={() => setTabFunc('form')}
          className={classNames({
            'm-header--content__active': formOrJSON === 'form',
          })}
        >
          Form
        </p>
        <p
          role="presentation"
          onClick={() => setTabFunc('json')}
          className={classNames({
            'm-header--content__active': formOrJSON === 'json',
          })}
        >
          JSON
        </p>
      </div>
    )}
  </div>
);
MHeader.propTypes = {
  title: PropTypes.string,
  formOrJSON: PropTypes.string,
  setTabFunc: PropTypes.func,
};
export default MHeader;
