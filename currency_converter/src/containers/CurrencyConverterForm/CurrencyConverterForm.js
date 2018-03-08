import React, { Component } from 'react';
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

type State = {
  basePrice: number,
  quotePrice: number,
};

class CurrencyConverterForm extends Component<Props, State> {
  state = {
    basePrice: 0,
    quotePrice: 0,
  }

  constructor(props) {
    super(props);

    this.handleBasePressed = this.handleBasePressed.bind(this);
    this.handleBaseTextChanged = this.handleBaseTextChanged.bind(this);
    this.handleQuoteTextChanged = this.handleQuoteTextChanged.bind(this);
  }

  handleBasePressed() {
  }

  handleBaseTextChanged() {
  }

  handleQuoteTextChanged() {
  }

  render() {
    const {
      style, base, quote, defaultBasePrice, defaultQuotePrice,
    } = this.props;

    return (
      <View style={[styles.wrapper, style]}>
        <InputWithButton buttonText={base} defaultValue={defaultBasePrice} />
        <InputWithButton
          buttonText={quote}
          value={defaultQuotePrice}
          editable={false}
        />
      </View>
    );
  }
}

CurrencyConverterForm.defaultProps = {
  style: {},
  defaultBasePrice: '',
  defaultQuotePrice: '',
};

export default CurrencyConverterForm;
