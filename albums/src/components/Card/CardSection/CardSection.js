import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CardSection = ({ children, style }) => (
  <View style={[styles.wrapper, style]}>{children}</View>
);

CardSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  style: PropTypes.any,
};

CardSection.defaultProps = {
  style: {},
};

export default CardSection;
