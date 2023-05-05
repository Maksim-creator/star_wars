import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './styles';

interface Props {
  isLoading: boolean;
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({isLoading, children}) => (
  <View style={styles.card}>
    {isLoading ? (
      <ActivityIndicator
        style={styles.spinner}
        size={'small'}
        color={'black'}
      />
    ) : (
      children
    )}
  </View>
);

export default Card;
