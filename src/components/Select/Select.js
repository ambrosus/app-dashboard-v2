/*eslint-disable*/

import React from 'react';
export const Select = React.forwardRef(({ onChange, name, label }, ref) => (
  <div className="select">
    <label className="label">{label}</label>
    <select name={name} ref={ref} onChange={onChange}>
      <option value="box">Box</option>
      <option value="pallet">Pallet</option>
      <option value="container">Сontainer</option>
    </select>
  </div>
));
