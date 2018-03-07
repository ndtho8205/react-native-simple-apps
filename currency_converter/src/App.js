/**
 * @flow
 */

import React from 'react';
import { View } from 'react-native';

import Home from './screens/Home';

import styles from './styles';

const App = () => (
  <View style={styles.container}>
    <Home />
  </View>
);

export default App;
