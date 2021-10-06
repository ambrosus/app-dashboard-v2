/*eslint-disable*/
import React from 'react';
import { VisibilityOffSvg } from './VisibilityOffSvg';
import { VisibilitySvg } from './VisibilitySvg';
export const SwitchToggle = (props) => {
  return (
    <>
      <div className="label" style={{ paddingBottom: 0 }}>
        {props.name}
      </div>
      <input
        checked={props.isOn ? props.isOn : false}
        onChange={props.handleToggle}
        type="checkbox"
        id={'switch-new'}
        className="switch-checkbox"
      />
      <label
        style={{ background: props.isOn && props.onColor }}
        className="switch-label"
        htmlFor={'switch-new'}
      >
        <div
          style={{
            color: props.isOn ? '#BFC9E0' : '#9198BB',
          }}
          className="switch-button-true"
        >
          {' '}
          <VisibilitySvg fill={props.isOn ? '#BFC9E0' : '#9198BB'} />
          <span>&nbsp;Public</span>
        </div>
        <div
          style={{
            color: !props.isOn ? '#BFC9E0' : '#9198BB',
          }}
          className="switch-button-false"
        >
          {' '}
          <VisibilityOffSvg fill={!props.isOn ? '#BFC9E0' : '#9198BB'} />
          <span>&nbsp;Private</span>
        </div>
        <span className="switch-button" />
      </label>
    </>
  );
};
