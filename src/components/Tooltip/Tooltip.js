import React from 'react';
import ReactTooltip from 'react-tooltip';
import * as PropTypes from 'prop-types';

function Tooltip({ icon, children }) {
  return (
    <div>
      <div data-tip data-for="tooltip" className="link">
        {icon}
      </div>
      <ReactTooltip id="tooltip" type="dark" effect="solid">
        {children}
      </ReactTooltip>
    </div>
  );
}
Tooltip.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.any,
};
export default Tooltip;
