import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {actions} from '../../../../fans/redux';
import {PersonType} from '../../../entities';
import {RootState} from '../../../../../store';
import {FansState} from '../../../../fans/entities';

import styles from './styles';

interface Props {
  name: string;
  id: string;
  gender: PersonType;
}

const ProfileImage: React.FC<Props> = ({name, id, gender}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const fansState = useSelector<RootState, FansState>(state => state.fans);

  const isFavorite = fansState[gender].includes(id);

  const handleToggleFavorite = () =>
    dispatch(actions.setFansCount({personId: id, type: gender}));

  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={require('../../../../../assets/background.jpeg')}>
        <View style={styles.container}>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={navigation.goBack}
              style={styles.backButton}>
              <Icon name={'chevron-left'} size={15} color={'black'} />
            </TouchableOpacity>
            <Icon
              onPress={handleToggleFavorite}
              name={isFavorite ? 'heart' : 'heart-o'}
              color={'red'}
              size={25}
            />
          </View>
          <Text style={styles.personName}>{name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileImage;
