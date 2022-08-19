import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { routeName } from '../constants/routeName';
import ChangePassword from '../screens/Auth/Login/ChangePassword';
import ForgotPassword from '../screens/Auth/Login/ForgotPassword';
import Login from '../screens/Auth/Login/Login';
import VerificationCode from '../screens/Auth/Login/VerificationCode';
import Splash from '../screens/Auth/splash/Splash';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();


function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
     initialRouteName={routeName.SPLASH}
    >
      <Stack.Screen name={routeName.SPLASH} component={Splash} />  
      <Stack.Screen name={routeName.LOGIN} component={Login} /> 
      <Stack.Screen name={routeName.FORGOT_PASSWORD} component={ForgotPassword} /> 
      <Stack.Screen name={routeName.CHANGE_PASSWORD} component={ChangePassword} /> 
      <Stack.Screen name={routeName.VERIFICATION_CODE} component={VerificationCode} /> 

      <Stack.Screen name={routeName.BOTTOM_TABS} component={BottomTabs} /> 

     


    </Stack.Navigator>
  )
}
export default AuthStack
