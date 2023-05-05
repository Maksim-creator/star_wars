import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {useGetPeopleQuery} from '../../redux/slice';
import Header from '../../../fans/components/Header';
import PeopleList from '../../components/Person/PeopleList';
import Pagination from '../../components/Pagination';

import styles from './styles';

const Home = () => {
  const [page, setPage] = useState(1);

  const {people, isPeopleLoading, isPeopleFetching, hasPrev, hasNext} =
    useGetPeopleQuery(page, {
      selectFromResult: ({data, isLoading, isFetching}) => {
        return {
          people: data?.people,
          isPeopleLoading: isLoading,
          isPeopleFetching: isFetching,
          hasPrev: data?.hasPrev,
          hasNext: data?.hasNext,
        };
      },
    });

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <PeopleList
        people={people}
        isLoading={isPeopleFetching || isPeopleLoading}
      />
      <Pagination
        page={page}
        setPage={setPage}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </SafeAreaView>
  );
};

export default Home;
