import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function BottomTabs(props) {
  return (
    <View></View>
    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    //   tabBarOptions={{
       

    //     // activeTintColor: 'red',
    //     // inactiveTintColor: 'lightgray',

    //     // activeBackgroundColor: colors.white,
    //     // inactiveBackgroundColor: 'red',
    //     indicatorStyle: {
    //       backgroundColor: 'transparent'
    //     },
    //     // tabBarStyle: {borderTopWidth:0},
    //     tabStyle: {
    //       backgroundColor: colors.black1,
    //       borderBottomWidth: 0,
    //       padding: 0,
    //       margin: 0,
    //       borderTopWidth: 0,
    //       border: 0,
    //       elevation: 0,
    //       marginTop: -1,
          
    //     },
    //     style: {
    //       //   height: 60,
    //       borderTopWidth: 10,

    //       //   shadowColor: colors.skyblue1,
    //       padding: 5,
    //       //   marginBottom: -2,
    //       borderTopColor: 'transparent',

    //       shadowOpacity: 0,
    //       shadowOffset: {
    //         height: 0,
    //       },
    //       shadowRadius: 0,
    //       borderTopColor: 'red', //Change Like This
    //       backgroundColor: colors.black2,
    //       // borderTopWidth: 220,
    //       //   borderColor: colors.black2,
    //       //   elevation: 0,
    //       elevation: 0, // for Android

    //       shadowOffset: {
    //         width: 0,
    //         height: 0, // for iOS
    //       },
    //       paddingBottom: 3,
    //     },
    //   }}
    //   screenOptions={({ route }) => ({
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName;

    //       if (route.name === routeName.HOME_BOTTOM) {
    //         iconName = focused ? globalPath.HOME_LOGO : globalPath.HOME_GREY;
    //       } else if (route.name === "Randomiser") {
    //         iconName = focused
    //           ? globalPath.RANDOMISER_LOGO
    //           : globalPath.RANDOM_GREY;
    //       } else if (route.name === "Scanner") {
    //         iconName = focused
    //           ? globalPath.SCANNER_ICON
    //           : globalPath.SCANNER_ICON_GREY;
    //       } else if (route.name === "Cart") {

    //         iconName = focused
    //           ? globalPath.CART_ICON
    //           : globalPath.CART_ICON_GREY;
    //       } else if (route.name === "Inbox") {
    //         iconName = focused
    //           ? globalPath.INBOX
    //           : globalPath.INBOX_GREY;
    //       }

    //       // You can return any component that you like here!
    //       return <Icon source={iconName} size={size} color={color} />;
    //     },
    //     tabBarActiveTintColor: colors.yellow,
    //     tabBarInactiveTintColor: colors.grey1,
    //   })}>
    //   <Tab.Screen
    //     name={routeName.HOME_BOTTOM}
    //     component={Home}
    //     options={{ headerShown: false }}
    //   />
      

    // </Tab.Navigator>
  );
}
