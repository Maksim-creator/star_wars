import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 3,
    width: '100%',
  },
  title: {
    fontWeight: '500',
    width: '50%',
  },
  value: {
    width: '50%',
    textAlign: 'right',
  },
  spinner: {
    marginRight: 5,
  },
});
