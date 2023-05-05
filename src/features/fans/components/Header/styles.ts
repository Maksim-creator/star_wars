import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {paddingHorizontal: 15, paddingTop: 20},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {fontSize: 25, fontWeight: '300'},
  button: {
    borderColor: 'red',
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 10,
  },
  buttonText: {color: 'red'},
  cards: {flexDirection: 'row', marginTop: 10},
});
