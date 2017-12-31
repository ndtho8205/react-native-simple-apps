/**
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Header from './components/Header';
import AlbumList from './components/AlbumList/AlbumList';

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
        <StatusBar backgroundColor="#7B1FA2" />
        <Header headerText="Albums!" />
        <AlbumList />
      </View>
    );
  }
}

/*
dark primary  #7B1FA2
light primary #E1BEE7
primary       #9C27B0
text/icons    #FFFFFF

accent        #9E9E9E
primary text  #212121
secondary txt #757575
divider       #BDBDBD
*/
