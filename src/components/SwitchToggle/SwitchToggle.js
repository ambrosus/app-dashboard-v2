/*eslint-disable*/
import React from 'react';
import visibility from '../../assets/svg/visibility.svg';
import visibilityOff from '../../assets/svg/visibility_off.svg';
import { ReactSVG } from 'react-svg';
export const SwitchToggle = (props) => {
  return (
    <>
      <div className="label" style={{ paddingBottom: 0 }}>
        {props.name}
      </div>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        type="checkbox"
        id={'react-switch-new'}
        className="react-switch-checkbox"
      />
      <label
        style={{ background: props.isOn && props.onColor }}
        className="react-switch-label"
        htmlFor={'react-switch-new'}
      >
        <div className="react-switch-button-true">
          {' '}
          <ReactSVG src={visibility} wrapper="span" /> Public
        </div>
        <div className="react-switch-button-false">
          {' '}
          <ReactSVG src={visibilityOff} wrapper="span" /> Ptivate
        </div>
        <span className="react-switch-button" />
      </label>
    </>
  );
};
