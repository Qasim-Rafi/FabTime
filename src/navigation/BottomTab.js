import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { colors } from '../constants/colorsPallet';
//navigationfile
//stack Screens
import Login from '../screens/Auth/Login/Login';
import Splash from '../screens/Auth/splash/Splash';
import {routeName} from '../constants/routeName';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={routeName.SPLASH} headerMode={'none'}>
      <Stack.Screen name={routeName.SPLASH} component={Splash} />
      <Stack.Screen name={routeName.LOGIN} component={Login} />
      {/* <Stack.Screen
        barColor="red"
        name={routeName.HOME_TABS}
        component={CustomTabBar}
      /> */}
      
    </Stack.Navigator>
  );
};
