import React from 'react';
import {Text} from 'react-native';

import styles from '../Person/GeneralPersonInfo/styles';

interface Props {
  title: string;
}

const NotFoundCard: React.FC<Props> = ({title}) => (
  <Text style={styles.noFoundMessage}>
    No {title} found for this character.
  </Text>
);

export default NotFoundCard;
