import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';

import styles from './styles';

type Props = {
  style?: {},
};

const Logo = (props: Props) => (
  <View style={[styles.wrapper, props.style]}>
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

Logo.defaultProps = {
  style: {},
};

export default Logo;
