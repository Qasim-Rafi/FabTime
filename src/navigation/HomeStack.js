import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import Dashboard from '../screens/Home/Dashboard';
import Home from '../screens/Home/Home';
import Notification from '../screens/Home/Notification';
import PresentTeam from '../screens/Home/PresentTeam';
import AttendenceDetails from '../screens/Home/AttendenceDetails';

import Profile from '../screens/Home/Profile';
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
      <Stack.Screen name={routeName.DASHBOARD} component={Dashboard} />
      <Stack.Screen name={routeName.PRESENT_TEAM} component={PresentTeam} />
      <Stack.Screen name={routeName.NOTIFICATION} component={Notification} />
      <Stack.Screen name={routeName.ATTENDENCE_DETAIL} component={AttendenceDetails} />

      <Stack.Screen name={routeName.PROFILE} component={Profile} />


     
    </Stack.Navigator>
  );
}

export default HomeStack;
