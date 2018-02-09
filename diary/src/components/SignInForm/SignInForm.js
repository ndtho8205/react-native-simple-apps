import React from 'react';
import { Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <View style={styles.usernameWrapper}>
            <Text style={styles.label}>Username</Text>
            <TextInput />
          </View>
          <View style={styles.passwordWrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput />
          </View>
        </View>
        <Button title="Sign In" style={styles.signInButton} />
        <TouchableOpacity style={styles.helpTextWrapper}>
          <Text style={styles.helpText}>Not a user? Sign up here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignInForm;
