import React, { Component } from 'react';
import { View } from 'react-native';

import InputWithButton from '../../components/InputWithButton';
import ExchangeRateInfo from '../../components/ExchangeRateInfo';
import ReverseCurrenciesButton from '../../components/ReverseCurrenciesButton';

import styles from './styles';

type Props = {
  style?: {},
  base: string,
  quote: string,
  rate: number,
  date?: Date,
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
    this.handleReverseCurrencyPressed = this.handleReverseCurrencyPressed.bind(this);
  }

  handleBasePressed() {
  }

  handleBaseTextChanged() {
  }

  handleQuoteTextChanged() {
  }

  handleReverseCurrencyPressed() {
    console.log('handleReverseCurrencyPressed');
  }

  render() {
    const {
      style, base, quote, rate, date, defaultBasePrice, defaultQuotePrice,
    } = this.props;

    return (
      <View style={[styles.wrapper, style]}>
        <View style={styles.inputWrapper}>
          <InputWithButton keyboardType="numeric" buttonText={base} defaultValue={defaultBasePrice} />
          <InputWithButton
            buttonText={quote}
            value={defaultQuotePrice}
            editable={false}
          />
        </View>
        <View style={styles.exchangeRateInfoWrapper}>
          <ExchangeRateInfo base={base} quote={quote} rate={rate} date={date} />
        </View>
        <View style={styles.reverseButtonWrapper}>
          <ReverseCurrenciesButton onPress={this.handleReverseCurrenciesPress} />
        </View>
      </View>
    );
  }
}

CurrencyConverterForm.defaultProps = {
  style: {},
  date: Date.now(),
  defaultBasePrice: '',
  defaultQuotePrice: '',
};

export default CurrencyConverterForm;
