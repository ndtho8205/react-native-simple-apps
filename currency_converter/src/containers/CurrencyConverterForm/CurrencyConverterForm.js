import React from 'react';
import { View } from 'react-native';

import InputWithButton from '../../components/InputWithButton';

import styles from './styles';

type Props = {
  style?: {},
  base: string,
  quote: string,
  defaultBasePrice?: string,
  defaultQuotePrice?: string,
}

const CurrencyConverterForm = (props: Props) => (
  <View style={[styles.wrapper, props.style]}>
    <InputWithButton buttonText={props.base} defaultValue={props.defaultBasePrice} />
    <InputWithButton
      buttonText={props.quote}
      value={props.defaultQuotePrice}
      editable={false}
    />
  </View>
);

CurrencyConverterForm.defaultProps = {
  style: {},
  defaultBasePrice: '',
  defaultQuotePrice: '',
};

export default CurrencyConverterForm;
