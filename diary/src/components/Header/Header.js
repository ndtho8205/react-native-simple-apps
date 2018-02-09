import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = ({ headerText }) => (
  <View style={styles.wrapper}>
    <Text style={styles.headerText}>{headerText}</Text>
  </View>
);

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
