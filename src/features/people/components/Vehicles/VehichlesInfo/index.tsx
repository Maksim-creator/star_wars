import React from 'react';
import {Text, View} from 'react-native';

import VehicleCard from '../VehicleCard';
import NotFoundCard from '../../NotFoundCard/NotFoundCard';
import {findItemsIdByUrl} from '../../../utils';

import styles from '../../Person/GeneralPersonInfo/styles';

interface Props {
  vehicles: string[];
}

const VehiclesInfo: React.FC<Props> = ({vehicles}) => {
  const vehiclesIds = findItemsIdByUrl(vehicles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vehicles: </Text>
      {!vehicles.length ? (
        <NotFoundCard title={'vehicles'} />
      ) : (
        vehiclesIds.map(vehicleId => (
          <VehicleCard vehicleId={vehicleId} key={vehicleId} />
        ))
      )}
    </View>
  );
};

export default VehiclesInfo;
