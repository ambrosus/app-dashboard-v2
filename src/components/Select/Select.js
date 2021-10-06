/*eslint-disable*/

import React from 'react';
export const Select = React.forwardRef(({ onChange, name, label }, ref) => (
  <div className="select">
    <label className="label">{label}</label>
    <select
      className="place_holder"
      required
      name={name}
      ref={ref}
      onChange={onChange}
    >
      <option defaultValue="" hidden selected>
        Asset Type
      </option>
      <option value="box">Box</option>
      <option value="pallet">Pallet</option>
      <option value="container">Сontainer</option>
    </select>
  </div>
));
