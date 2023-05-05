import React from 'react';
import {ScrollView, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {Person} from '../../entities';
import ProfileImage from '../../components/Person/ProfileImage';
import GeneralPersonInfo from '../../components/Person/GeneralPersonInfo';
import StarshipsInfo from '../../components/Starships/StarshipsInfo';
import VehiclesInfo from '../../components/Vehicles/VehichlesInfo';
import FilmsInfo from '../../components/Films/FilmsInfo';

import styles from './styles';

interface Route {
  key: string;
  name: string;
  params: {
    person: Person;
  };
}

const Profile = () => {
  const {
    params: {person},
  } = useRoute<Route>();

  const {films, starships, vehicles, name, ...generalInfo} = person;

  return (
    <ScrollView>
      <ProfileImage
        name={name}
        gender={generalInfo.gender}
        id={generalInfo.id}
      />
      <View style={styles.container}>
        <GeneralPersonInfo generalInfo={generalInfo} />
        <StarshipsInfo starships={starships} />
        <VehiclesInfo vehicles={vehicles} />
        <FilmsInfo films={films} />
      </View>
    </ScrollView>
  );
};

export default Profile;
