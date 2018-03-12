import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

type Props = {
  style?: {},
  item?: string,
};

const ListItem = (props: Props) => {
  const { style, item } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <Text>{ item}</Text>
    </View>
  );
};

ListItem.defaultProps = {
  style: {},
  item: '',
};

export default ListItem;
