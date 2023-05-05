import React from 'react';

import {useGetStarshipQuery} from '../../../redux/slice';
import RowField from '../../RowField';
import Card from '../../Card';

interface Props {
  starshipId: number;
}
const StarshipCard: React.FC<Props> = ({starshipId}) => {
  const {starship, isStarshipLoading, isStarshipFetching} = useGetStarshipQuery(
    starshipId,
    {
      selectFromResult: ({data, isLoading, isFetching}) => ({
        starship: data,
        isStarshipLoading: isLoading,
        isStarshipFetching: isFetching,
      }),
    },
  );

  return (
    <Card isLoading={isStarshipLoading || isStarshipFetching}>
      <RowField title={'Name'} value={starship?.name || 'n/a'} />
      <RowField title={'Model'} value={starship?.model || 'n/a'} />
      <RowField
        title={'Starship class'}
        value={starship?.starshipClass || 'n/a'}
      />
      <RowField
        title={'Cargo capacity'}
        value={starship?.cargoCapacity || 'n/a'}
      />
      <RowField title={'Cost'} value={starship?.costInCredits || 'n/a'} />
      <RowField title={'Crew'} value={starship?.crew || 'n/a'} />
    </Card>
  );
};

export default StarshipCard;
