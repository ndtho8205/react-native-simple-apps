import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Logo from '../../components/Logo';

import styles from './styles';

const Home = () => (
  <View>
    <StatusBar backgroundColor={EStyleSheet.value('$darkPrimaryColor')} />

    <Logo />

    <Text>Hello world!</Text>
  </View>
);

export default Home;
