import React, { Component } from 'react';
import { View, StatusBar, Text, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import currencies from '../../data/currencies';

import styles from './styles';

type Props = {
  style: {},
};

class CurrencyList extends Component<Props> {
  render() {
    const { style } = this.props;

    return (
      <View style={[styles.wrapper, style]}>
        <StatusBar backgroundColor={EStyleSheet.value('$darkPrimaryColor')} />

        <FlatList
          data={currencies}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

CurrencyList.defaultProps = {
  style: {},
};

export default CurrencyList;
