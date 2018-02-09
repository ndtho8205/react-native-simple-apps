/**
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Header from './components/Header';
import SignIn from './screens/SignIn';
import NewPost from './screens/NewPost';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#388E3C" />
        <Header headerText="Diary" />
        <NewPost />
      </View>
    );
  }
}

/*

dark primary  #388E3C
light primary #C8E6C9
primary       #4CAF50
text/icons    #FFFFFF

accent        #FFEB3B
primary text  #212121
secondary txt #757575
divider       #BDBDBD
*/
