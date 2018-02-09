import React from 'react';
import { View, TextInput, Button } from 'react-native';

import styles from './styles';

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.contentInput}
          multiline
          numberOfLines={10}
          placeholder="What do you have to say for yourself?"
          placeholderTextColor="#757575"
          underlineColorAndroid="transparent"
        />
        <Button title="Submit" onPress={() => {}} style={styles.submitButton} />
      </View>
    );
  }
}

export default NewPostForm;
