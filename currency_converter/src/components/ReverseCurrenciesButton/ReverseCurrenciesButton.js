import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

import styles from './styles';

type Props = {
  style? : {},
  onPress?: () => void,
}

const ReverseCurrenciesButton = (props: Props) => {
  const { style, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.wrapper, style]}>
        <Image source={require('./images/icon.png')} resizeMode="contain" style={styles.icon} />
        <Text style={styles.text}>Reverse currencies</Text>
      </View>
    </TouchableOpacity>
  );
};

ReverseCurrenciesButton.defaultProps = {
  style: {},
  onPress: () => {},
};

export default ReverseCurrenciesButton;
