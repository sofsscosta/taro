import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaroIcon = ({ action, icon, color, size }) => (
  <div onClick={action}>
    <FontAwesomeIcon icon={icon} color={color} size={size} />
  </div>
);

TaroIcon.propTypes = {
  action: PropTypes.func,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

TaroIcon.defaultProps = {
  action: undefined,
  color: undefined,
  size: undefined,
};

export default TaroIcon;
