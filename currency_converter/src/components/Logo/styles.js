import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const logoWidth = Dimensions.get('window').width / 2;

const styles = EStyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  backgroundLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: logoWidth,
    height: logoWidth,
  },
  logo: {
    width: logoWidth / 2,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '$text',
    marginTop: 16,
  },
});

export default styles;
