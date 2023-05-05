import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  value: string;
  isValueLoading?: boolean;
}

const RowField: React.FC<Props> = ({title, value, isValueLoading = false}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}:</Text>
    {isValueLoading ? (
      <ActivityIndicator color={'black'} size={1} style={styles.spinner} />
    ) : (
      <Text numberOfLines={2} style={styles.value}>
        {value || 'n/a'}
      </Text>
    )}
  </View>
);

export default RowField;
