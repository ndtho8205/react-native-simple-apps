import React from 'react';
import { View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Logo from '../../components/Logo';
import SettingsButton from '../../components/SettingsButton';

import CurrencyConverterForm from '../../containers/CurrencyConverterForm';


import styles from './styles';

type Props = {
  style?: {},
};

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'VND';
const TEMP_EXCHANGE_RATE = 2000;
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '200000';


const Home = (props: Props) => (
  <View style={[styles.wrapper, props.style]}>
    <StatusBar backgroundColor={EStyleSheet.value('$darkPrimaryColor')} />

    <SettingsButton style={styles.settingsButton}/>

    <Logo />

    <CurrencyConverterForm
      base={TEMP_BASE_CURRENCY}
      quote={TEMP_QUOTE_CURRENCY}
      rate={TEMP_EXCHANGE_RATE}
      defaultBasePrice={TEMP_BASE_PRICE}
      defaultQuotePrice={TEMP_QUOTE_PRICE}
    />


  </View>
);

Home.defaultProps = {
  style: {},
};

export default Home;
