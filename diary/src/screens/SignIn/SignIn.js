import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import SignInForm from '../../components/SignInForm';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <SignInForm />
      </View>
    );
  }
}

export default SignIn;
