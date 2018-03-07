import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.wrapper}>
    <ImageBackground
      source={require('./images/background.png')}
      resizeMode="contain"
      style={styles.backgroundLogo}
    >
      <Image
        source={require('./images/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
    </ImageBackground>

    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
