import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';


type Props = {
  style?: {},
  onPress?: () => void,
  buttonText?: string,
  editable?: boolean,
}

const InputWithButton = (props: Props) => {
  const {
    style, onPress, buttonText, editable, ...inputProps
  } = props;

  const underlayColor = color(styles.$inputButtonBackground).darken(0.1);

  return (
    <View style={[styles.wrapper, style]}>
      <TouchableHighlight
        onPress={onPress}
        style={styles.buttonWrapper}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>{ buttonText }</Text>
      </TouchableHighlight>
      <TextInput
        style={[styles.input, !editable ? styles.inputDisabled : {}]}
        editable={editable}
        underlineColorAndroid="transparent"
        {...inputProps}
      />
    </View>
  );
};

InputWithButton.defaultProps = {
  style: {},
  onPress: () => {},
  buttonText: '',
  editable: true,
};

export default InputWithButton;
