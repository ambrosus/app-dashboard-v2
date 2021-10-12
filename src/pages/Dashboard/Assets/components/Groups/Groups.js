/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import addIcon from '../../../../../assets/svg/add_circle.svg';
import { useForm } from 'react-hook-form';

const Groups = () => {
  const [nameOfProp, setNameOfProp] = useState('');
  const [descriptionOfProp, setDescriptionOfProp] = useState('');
  const [prop, setProp] = useState(null);

  return (
    <div className="add-groups-container">
      <div className="input">
        <label className="input--label">Group name</label>
        <div className="spacer-10" />
        <input
          autoComplete="off"
          name="groupName"
          required
          placeholder="Group name"
          type="text"
        />
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
              autoComplete="off"
              name="groupPropName"
              required
              placeholder="Properties name"
              type="text"
            />
            <div className="spacer-10" />
            <input
              autoComplete="off"
              name="groupPropDescription"
              required
              placeholder="Properties description"
              type="text"
            />
          </div>
        </div>
        <div className="prop-description">
          <div className="input">
            <label className="input--label">Description</label>
            <input
              name="groupPropDescription"
              autoComplete="off"
              required
              placeholder="Properties description"
              type="text"
            />
            <div className="spacer-10" />
            <input
              name="groupPropDescription"
              autoComplete="off"
              required
              placeholder="Properties description"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="prop-add-btn">
        <ReactSVG src={addIcon} wrapper="span" />
        <p>Add properties</p>
      </div>
    </div>
  );
};
export default Groups;
