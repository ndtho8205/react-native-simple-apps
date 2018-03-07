import React from 'react';
import { View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Logo from '../../components/Logo';
import InputWithButton from '../../components/InputWithButton';

import styles from './styles';

type Props = {
  style?: {},
};

const Home = (props: Props) => (
  <View style={[styles.wrapper, props.style]}>
    <StatusBar backgroundColor={EStyleSheet.value('$darkPrimaryColor')} />

    <Logo />

    <View style={styles.form}>
      <InputWithButton />
      <InputWithButton editable={false} />
    </View>

  </View>
);

Home.defaultProps = {
  style: {},
};

export default Home;
