import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

import styles from './styles';
import AlbumDetail from '../AlbumDetail';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    axios
      .get('http://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => {
        this.setState({ albums: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <FlatList
          data={this.state.albums}
          renderItem={({ item }) => <AlbumDetail key={item.title} album={item} />}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

AlbumList.propTypes = {};

export default AlbumList;
