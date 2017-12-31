import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Card = ({ children, style }) => <View style={[styles.wrapper, style]}>{children}</View>;

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  style: PropTypes.object,
};

Card.defaultProps = {
  style: {},
};

export default Card;
