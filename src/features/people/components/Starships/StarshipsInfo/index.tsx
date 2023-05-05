import React from 'react';
import {Text, View} from 'react-native';

import StarshipCard from '../StarshipCard';
import NotFoundCard from '../../NotFoundCard/NotFoundCard';
import {findItemsIdByUrl} from '../../../utils';

import styles from '../../Person/GeneralPersonInfo/styles';

interface Props {
  starships: string[];
}

const StarshipsInfo: React.FC<Props> = ({starships}) => {
  const starshipIds = findItemsIdByUrl(starships);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starships: </Text>
      {!starships.length ? (
        <NotFoundCard title={'starships'} />
      ) : (
        starshipIds.map(starshipId => (
          <StarshipCard key={starshipId} starshipId={starshipId} />
        ))
      )}
    </View>
  );
};

export default StarshipsInfo;
