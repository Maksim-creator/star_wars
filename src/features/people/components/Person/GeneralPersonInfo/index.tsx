import React from 'react';
import {Text, View} from 'react-native';

import RowField from '../../RowField';
import {Person} from '../../../entities';

import styles from './styles';

interface Props {
  generalInfo: Omit<Person, 'films' | 'starships' | 'vehicles' | 'name'>;
}

const GeneralPersonInfo: React.FC<Props> = ({generalInfo}) => (
  <View style={styles.container}>
    <Text style={styles.title}>General info: </Text>
    <RowField title={'Birth year'} value={generalInfo.birthYear} />
    <RowField title={'Eye color'} value={generalInfo.eyeColor} />
    <RowField title={'Hair color'} value={generalInfo.hairColor} />
    <RowField title={'Skin color'} value={generalInfo.skinColor} />
    <RowField title={'Height'} value={generalInfo.height} />
    <RowField title={'Mass'} value={generalInfo.mass} />
    <RowField title={'Gender'} value={generalInfo.gender} />
  </View>
);

export default GeneralPersonInfo;
