import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 30,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  albumTitleWrapper: {
    justifyContent: 'center',
  },
  albumTitle: {
    color: '#212121',
    fontSize: 16,
  },
  albumArtist: {
    color: '#757575',
    fontSize: 14,
  },
  albumThumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  bodySection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: '100%',
    height: 300,
  },
  footerSection: {},
  albumUrl: {},
});

export default styles;
