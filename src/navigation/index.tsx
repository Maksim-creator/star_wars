import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../features/people/screens/Home';
import Profile from '../features/people/screens/Profile';
import {screenNames} from './screenNames';
import {Theme} from './theme';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenNames.HOME} component={Home} />
        <Stack.Screen name={screenNames.PROFILE} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
