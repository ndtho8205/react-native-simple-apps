import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  icon: {
    width: 20,
    marginRight: 8,
  },
  text: {
    color: '$text',
    fontSize: 14,
  },
});

export default styles;
