import React from 'react';
import * as PropTypes from 'prop-types';

const getPath = (name, props) => {
  switch (name) {
    case 'add':
      return (
        <path
          {...props}
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z"
          fill="#BFC9E0"
        />
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = '',
  style = {},
  fill = '#000',
  width = '20',
  className = '',
  height = '20',
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);
SVGIcon.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
  fill: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
};
export default SVGIcon;
