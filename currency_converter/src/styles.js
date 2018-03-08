import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $darkPrimaryColor: '#455a64',
  $lightPrimaryColor: '#cfd8dc',
  $primaryColor: '#607d8b',
  $text: '#ffffff',

  $accentColor: '#03a9f4',
  $primaryText: '#212121',
  $secondaryText: '#757575',
  $dividerColor: '#bdbdbd',
});

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryColor',
  },
});

export default styles;
