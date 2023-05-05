import React from 'react';

import {useGetFilmQuery} from '../../../redux/slice';
import RowField from '../../RowField';
import Card from '../../Card';

interface Props {
  filmId: number;
}

const FilmCard: React.FC<Props> = ({filmId}) => {
  const {film, isFilmLoading, isFilmFetching} = useGetFilmQuery(filmId, {
    selectFromResult: ({data, isLoading, isFetching}) => ({
      film: data,
      isFilmLoading: isLoading,
      isFilmFetching: isFetching,
    }),
  });

  return (
    <Card isLoading={isFilmLoading || isFilmFetching}>
      <RowField title={'Title'} value={film?.title || 'n/a'} />
      <RowField title={'Director'} value={film?.director || 'n/a'} />
      <RowField title={'Opening crawl'} value={film?.openingCrawl || 'n/a'} />
      <RowField title={'Producer'} value={film?.producer || 'n/a'} />
      <RowField title={'Release date'} value={film?.releaseDate || 'n/a'} />
    </Card>
  );
};

export default FilmCard;
