import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();


function CheckStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={routeName.LANDING_SCREEN} component={Home} />


     
    </Stack.Navigator>
  );
}

export default CheckStack;
