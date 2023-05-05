import {Dimensions, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default StyleSheet.create({
  image: {
    height: 300,
    width: Dimensions.get('screen').width,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  backButton: {
    backgroundColor: 'white',
    width: 35,
    height: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personName: {
    color: 'white',
    paddingVertical: 15,
    fontWeight: '700',
    fontSize: 30,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: DeviceInfo.hasNotch() ? 50 : 25,
    width: '100%',
  },
});
