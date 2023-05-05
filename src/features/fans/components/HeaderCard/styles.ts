import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 9,
    paddingVertical: 7,
    flexGrow: 1,
    marginHorizontal: 2,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.5,
    elevation: 5,
  },
  cardValue: {fontWeight: '500', fontSize: 20},
});
