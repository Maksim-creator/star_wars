import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 10,
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    borderRadius: 20,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    paddingBottom: 7,
  },
  noFoundMessage: {
    textAlign: 'center',
    fontWeight: '700',
    paddingVertical: 15,
  },
});
