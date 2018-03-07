import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './styles';


type Props = {
  style?: {},
  editable?: boolean,
}

const InputWithButton = (props: Props) => {
  const underlayColor = color(styles.$inputButtonBackground).darken(0.1);

  return (
    <View style={[styles.wrapper, props.style]}>
      <TouchableHighlight
        onPress={() => {}}
        style={styles.buttonWrapper}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>USD</Text>
      </TouchableHighlight>
      <TextInput style={styles.input} keyboardType="numeric" underlineColorAndroid="transparent" editable={props.editable} />
    </View>
  );
};

InputWithButton.defaultProps = {
  style: {},
  editable: true,
};

export default InputWithButton;
