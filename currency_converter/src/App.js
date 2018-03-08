/**
 * @flow
 */

import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Home from './screens/Home';

import styles from './styles';

const App = () => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Home />
    </View>
  </TouchableWithoutFeedback>
);

export default App;
