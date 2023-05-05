import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import HeaderCard from '../HeaderCard';
import {RootState} from '../../../../store';
import {FansState} from '../../entities';
import {actions} from '../../redux';

import styles from './styles';

const Header = () => {
  const dispatch = useDispatch();
  const fansState = useSelector<RootState, FansState>(state => state.fans);

  const clearAllFans = () => dispatch(actions.clearFansCount());

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Fans</Text>
        <TouchableOpacity onPress={clearAllFans} style={styles.button}>
          <Text style={styles.buttonText}>CLEAR FANS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cards}>
        <HeaderCard title={'Female fans'} value={fansState.female.length} />
        <HeaderCard title={'Male fans'} value={fansState.male.length} />
        <HeaderCard title={'Others'} value={fansState.other.length} />
      </View>
    </View>
  );
};

export default Header;
