import React from 'react';

import RowField from '../../RowField';
import {useGetVehicleQuery} from '../../../redux/slice';
import Card from '../../Card';

interface Props {
  vehicleId: number;
}

const VehicleCard: React.FC<Props> = ({vehicleId}) => {
  const {vehicle, isVehicleLoading, isVehicleFetching} = useGetVehicleQuery(
    vehicleId,
    {
      selectFromResult: ({data, isLoading, isFetching}) => ({
        vehicle: data,
        isVehicleLoading: isLoading,
        isVehicleFetching: isFetching,
      }),
    },
  );

  return (
    <Card isLoading={isVehicleLoading || isVehicleFetching}>
      <RowField title={'Name'} value={vehicle?.name || 'n/a'} />
      <RowField title={'Model'} value={vehicle?.model || 'n/a'} />
      <RowField
        title={'Vehicle class'}
        value={vehicle?.vehicleClass || 'n/a'}
      />
      <RowField
        title={'Cargo capacity'}
        value={vehicle?.cargoCapacity || 'n/a'}
      />
      <RowField title={'Cost'} value={vehicle?.costInCredits || 'n/a'} />
      <RowField title={'Crew'} value={vehicle?.crew || 'n/a'} />
    </Card>
  );
};

export default VehicleCard;
