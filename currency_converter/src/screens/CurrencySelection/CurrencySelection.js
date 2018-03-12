import React, { Component } from 'react';
import { View, StatusBar, Text, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CurrencyList from '../../container/CurrencyList';
import currencies from '../../data/currencies';

import styles from './styles';

type Props = {
  style: {},
};

class CurrencySelection extends Component<Props> {
  render() {
    const { style } = this.props;

    return (
      <View style={[styles.wrapper, style]}>
        <StatusBar backgroundColor={EStyleSheet.value('$darkPrimaryColor')} />

        <CurrencyList data={currencies} />
      </View>
    );
  }
}

CurrencySelection.defaultProps = {
  style: {},
};

export default CurrencySelection;
