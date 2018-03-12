import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import ListItem from '../../components/ListItem';

import styles from './styles';

type Props = {
  style?: {},
  currencies: [],
}

class CurrencyList extends Component<Props> {
  render() {
    const { style, currencies } = this.props;

    return (
      <View style={[styles.wrapper, style]}>
        <FlatList data={currencies} renderItem={({ item }) => <ListItem item={item} />} keyExtractor={item => item} />
      </View>
    );
  }
}

CurrencyList.defaultProps = {
  style: {},
};

export default CurrencyList;
