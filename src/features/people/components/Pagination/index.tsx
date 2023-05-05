import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasPrev?: boolean;
  hasNext?: boolean;
}

const Pagination: React.FC<Props> = ({page, setPage, hasPrev, hasNext}) => {
  const handleNextPage = () => setPage(prevPage => prevPage + 1);
  const handlePrevPage = () => setPage(prevPage => prevPage - 1);

  return (
    <View style={styles.container}>
      <Icon
        name={'chevron-left'}
        size={15}
        color={!hasPrev ? 'grey' : 'black'}
        onPress={handlePrevPage}
        disabled={!hasPrev}
      />
      <Text style={styles.page}>{page}</Text>
      <Icon
        name={'chevron-right'}
        size={15}
        onPress={handleNextPage}
        color={!hasNext ? 'grey' : 'black'}
        disabled={!hasNext}
      />
    </View>
  );
};

export default Pagination;
