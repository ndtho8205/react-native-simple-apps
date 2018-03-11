/**
 * @flow
 */

import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

import styles from './styles';

const App = () => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <CurrencyList />
    </View>
  </TouchableWithoutFeedback>
);

export default App;
