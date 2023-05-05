import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {useGetPlanetQuery, useGetSpeciesQuery} from '../../../redux/slice';
import {actions} from '../../../../fans/redux';
import RowField from '../../RowField';
import {Person} from '../../../entities';
import {screenNames} from '../../../../../navigation/screenNames';
import {NavigationStack} from '../../../../../navigation/entities';

import styles from './styles';

interface Props {
  person: Person;
  isFavorite: boolean;
}

const PersonCard: React.FC<Props> = ({person, isFavorite}) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();

  const planetId = +person.homeworld.split('/').reverse()[1];
  const speciesId = +person.species[0]?.split('/').reverse()[1];

  const {planetName, isNameLoading, isNameFetching} = useGetPlanetQuery(
    planetId,
    {
      selectFromResult: ({data, isLoading, isFetching}) => ({
        planetName: data,
        isNameLoading: isLoading,
        isNameFetching: isFetching,
      }),
    },
  );

  const {speciesName, isSpeciesLoading, isSpeciesFetching} = useGetSpeciesQuery(
    speciesId,
    {
      selectFromResult: ({data, isLoading, isFetching}) => ({
        speciesName: data,
        isSpeciesLoading: isLoading,
        isSpeciesFetching: isFetching,
      }),
      skip: !speciesId,
    },
  );

  const handleToggleFavorite = () =>
    dispatch(actions.setFansCount({type: person.gender, personId: person.id}));

  const navigateToProfile = () =>
    navigation.navigate(screenNames.PROFILE, {person});

  return (
    <TouchableOpacity style={styles.card} onPress={navigateToProfile}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{person.name}</Text>
        <Icon
          onPress={handleToggleFavorite}
          name={isFavorite ? 'heart' : 'heart-o'}
          size={20}
          color={'red'}
        />
      </View>
      <RowField title={'Birth year'} value={person.birthYear} />
      <RowField title={'Gender'} value={person.gender} />
      <RowField
        title={'Planet'}
        value={planetName || 'n/a'}
        isValueLoading={isNameFetching || isNameLoading}
      />
      <RowField
        title={'Species'}
        value={speciesName || 'n/a'}
        isValueLoading={isSpeciesFetching || isSpeciesLoading}
      />
    </TouchableOpacity>
  );
};

export default PersonCard;
