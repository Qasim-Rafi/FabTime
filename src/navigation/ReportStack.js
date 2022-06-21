import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { routeName } from "../constants/routeName";
import Dashboard from "../screens/Home/Dashboard";
import Users from "../screens/Home/Users";


const Stack = createNativeStackNavigator();

function ReportStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={routeName.USERS}
    >
      <Stack.Screen name={routeName.USERS} component={Users} />
      {/* <Stack.Screen name={routeName.PRESENT_TEAM} component={PresentTeam} /> */}
    </Stack.Navigator>
  );
}

export default ReportStack;
