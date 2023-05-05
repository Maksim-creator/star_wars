import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  value: number;
}
const HeaderCard: React.FC<Props> = ({title, value}) => (
  <View style={styles.card}>
    <Text style={styles.cardValue}>{value}</Text>
    <Text>{title}</Text>
  </View>
);

export default HeaderCard;
