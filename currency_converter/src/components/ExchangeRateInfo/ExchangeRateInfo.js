import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

type Props = {
  style?: {},
  base: string,
  quote: string,
  rate: number,
  date?: Date,
};

const ExchangeRateInfo = (props: Props) => {
  const {
    style, base, quote, rate, date,
  } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.text}>{`1 ${base} = ${rate} ${quote} as of ${moment(date).format('MMMM D, YYYY')}`}</Text>
    </View>
  );
};

ExchangeRateInfo.defaultProps = {
  style: {},
  date: Date.now(),
};

export default ExchangeRateInfo;
