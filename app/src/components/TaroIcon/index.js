import React from 'react';
import PropTypes from 'prop-types';

const TaroIcon = ({ action, icon, name }) => (
  <div className={name} onClick={action || undefined}>
    <i className={icon} aria-hidden="true"></i>
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
