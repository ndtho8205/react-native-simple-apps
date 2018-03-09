import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButton: {
    position: 'absolute',
    top: 0,
    right: -16,
    '@media ios': {
      paddingTop: 20,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
});

export default styles;
