import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Card, { CardSection } from '../Card';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection style={styles.headerSection}>
      <Image style={styles.albumThumbnail} source={{ uri: album.thumbnail_image }} />
      <View style={styles.albumTitleWrapper}>
        <Text style={styles.albumTitle}>{album.title}</Text>
        <Text style={styles.albumArtist}>{album.artist}</Text>
      </View>
    </CardSection>

    <CardSection style={styles.bodySection}>
      <Image style={styles.albumImage} source={{ uri: album.image }} resizeMode="cover" />
    </CardSection>

    <CardSection style={styles.footerSection}>
      <Button
        title="Buy now!"
        onPress={() => {
          Linking.openURL(album.url).catch(err => console.error('An error occurred', err));
        }}
      />
    </CardSection>
  </Card>
);

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    thumbnail_image: PropTypes.string,
  }).isRequired,
};

export default AlbumDetail;
