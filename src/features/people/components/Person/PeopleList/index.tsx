import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItem, View} from 'react-native';
import {useSelector} from 'react-redux';

import {FansState} from '../../../../fans/entities';
import PersonCard from '../PersonCard';
import {RootState} from '../../../../../store';
import {Person, PersonType} from '../../../entities';

import styles from './styles';

interface Props {
  people?: Person[];
  isLoading: boolean;
}

const PeopleList: React.FC<Props> = ({people, isLoading}) => {
  const fansState = useSelector<RootState, FansState>(state => state.fans);

  const renderItem: ListRenderItem<Person> = ({item}) => {
    const isFavorite = fansState[item.gender as PersonType].includes(item.id);
    return <PersonCard person={item} isFavorite={isFavorite} />;
  };

  const keyExtractor = (item: Person) => item.name;

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={'black'} size={'large'} />
      ) : (
        <FlatList
          data={people}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </View>
  );
};

export default PeopleList;
