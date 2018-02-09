import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import NewPostForm from '../../components/NewPostForm';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <NewPostForm />
      </View>
    );
  }
}

export default NewPost;
