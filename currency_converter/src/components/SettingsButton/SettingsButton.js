import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

type Props = {
  style?: {},
  onPress?: ()=>void,
}

const SettingsButton = (props: Props) => {
  const { style, onPress } = props;
  return (
    <View style={[styles.wrapper, style]}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('./images/gear.png')} resizeMode="contain" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

SettingsButton.defaultProps = {
  style: {},
  onPress: () => {},
};

export default SettingsButton;
