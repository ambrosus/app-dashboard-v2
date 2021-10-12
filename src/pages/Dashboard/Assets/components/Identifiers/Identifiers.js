/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import infoIcon from '../../../../../assets/svg/info-icon.svg';
import addIcon from '../../../../../assets/svg/add_circle.svg';
import { useForm } from 'react-hook-form';

const Identifiers = () => {
  const [nameOfProp, setNameOfProp] = useState('');
  const [descriptionOfProp, setDescriptionOfProp] = useState('');
  const [prop, setProp] = useState(null);

  return (
    <>
      <div className="m-header">
        <div className="m-header--title">Identifiers</div>
        <div className="m-header--content">
          <ReactSVG src={infoIcon} wrapper="span" />
        </div>
      </div>
      <>
        <div className="spacer-10" />
        <div className="spacer-15" />
      </>
      <div className="asset-create-properties-container">
        <div className="prop-name">
          <div className="input">
            <label className="input--label">Name</label>
            <input
              name="identifierName"
              autoComplete="off"
              required
              placeholder="Identifier name"
              type="text"
            />
          </div>
        </div>
        <div className="prop-description">
          <div className="input">
            <label className="input--label">Description</label>
            <input
              name="identifierName"
              autoComplete="off"
              required
              placeholder="Identifier description"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="prop-add-btn">
        <ReactSVG src={addIcon} wrapper="span" />
        <p>Add identifier</p>
      </div>
    </>
  );
};
export default Identifiers;
