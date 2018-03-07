import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $inputHeight: 45,
  $inputBorderRadius: 5,
  $inputBorderColor: '$lightPrimaryColor',
  $inputBackgroundColor: '$text',
  $inputButtonBackground: '$lightPrimaryColor',
  $inputButtonTextColor: '$darkPrimaryColor',

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '$inputHeight',
    borderTopLeftRadius: '$inputBorderRadius',
    borderBottomLeftRadius: '$inputBorderRadius',
    backgroundColor: '$inputButtonBackground',
  },
  buttonText: {
    paddingHorizontal: 8,
    color: '$inputButtonTextColor',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: '$inputHeight',
    borderWidth: 1,
    borderColor: '$inputBorderColor',
    borderTopRightRadius: '$inputBorderRadius',
    borderBottomRightRadius: '$inputBorderRadius',
    backgroundColor: '$inputBackgroundColor',
    paddingHorizontal: 8,
    fontSize: 16,

  },
});

export default styles;
