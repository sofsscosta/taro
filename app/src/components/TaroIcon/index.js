import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaroIcon = ({ action, icon, name }) => (
  <div className={name} onClick={action}>
    <FontAwesomeIcon className={name} icon={icon} />
  </div>
);

TaroIcon.propTypes = {
  action: PropTypes.func,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

TaroIcon.defaultProps = {
  action: undefined,
};

export default TaroIcon;
