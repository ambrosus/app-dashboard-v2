import React from 'react';
import PropTypes from 'prop-types';
function Textarea({ onchange, placeholder }) {
  return (
    <textarea
      placeholder={placeholder}
      className="textarea-field"
      onChange={onchange}
    />
  );
}
Textarea.propTypes = {
  placeholder: PropTypes.string,
  onchange: PropTypes.func,
};
export default Textarea;
