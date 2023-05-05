import React from 'react';
import {Text, View} from 'react-native';

import FilmCard from '../FilmCard';
import NotFoundCard from '../../NotFoundCard/NotFoundCard';
import {findItemsIdByUrl} from '../../../utils';

import styles from '../../Person/GeneralPersonInfo/styles';

interface Props {
  films: string[];
}

const FilmsInfo: React.FC<Props> = ({films}) => {
  const filmsIds = findItemsIdByUrl(films);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Films: </Text>
      {!films.length ? (
        <NotFoundCard title={'films'} />
      ) : (
        filmsIds.map(filmId => <FilmCard key={filmId} filmId={filmId} />)
      )}
    </View>
  );
};

export default FilmsInfo;
