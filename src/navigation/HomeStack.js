import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import Home from '../screens/Home/Home';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    // initialRouteName="SPLASH"
    >
      <Stack.Screen name={routeName.LANDING_SCREEN} component={BottomTabs} />

     
    </Stack.Navigator>
  );
}

export default HomeStack;
