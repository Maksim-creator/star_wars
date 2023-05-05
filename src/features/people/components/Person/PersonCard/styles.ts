import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 8,
    borderRadius: 20,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
});
