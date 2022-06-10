import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from 'react-native-vector-icons'
import { useRef } from 'react';
import { globalPath } from '../constants/globalPath';
import { colors } from '../constants/colorsPallet';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function BottomTabs() {

  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, }}>
      <Tab.Navigator
        style={{ marginHorizontal: 10 }}
        // sceneContainerStyle={{marginHorizontal:20,backgroundColor:'red'}}
        screenOptions={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarActiveTintColor: colors.red,
          tabBarInactiveTintColor: colors.white,

          // Floating Tab Bar...
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: 'bold'
          },
          tabBarStyle: {
            backgroundColor: colors.darkblue,
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: colors.black,
            shadowOpacity: 0.1,
            shadowOffset: {
              width: 40,
              height: 90
            },
            marginBottom:20,
            paddingHorizontal: 20,
            marginHorizontal: 50
          },
          //  }
        }}>
        <Tab.Screen name={"Search"} component={SearchScreen} options={{
          tabBarIcon: ({ focused }) => (
           <View style={focused? styles.TouchableTab:{}}>
              <View style={focused?styles.ActiveTab: styles.inActiveTab}>
                <Image source={globalPath.plus} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image>
              </View>
            </View>
          )
        }}
        //  listeners={({ navigation, route }) => ({
        //   // Onpress Update....
        //   tabPress: e => {
        //     Animated.spring(tabOffsetValue, {
        //       toValue: getWidth(),
        //       useNativeDriver: true
        //     }).start();
        //   }
        // })}
        ></Tab.Screen>


        {

          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (

            <View style={focused? styles.TouchableTab:{}}>
              <View style={focused?styles.ActiveTab: styles.inActiveTab}>
                <Image source={globalPath.plus} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image>
              </View>
            </View>
          )
        }}
        // listeners={({ navigation, route }) => ({
        //   // Onpress Update....
        //   tabPress: e => {
        //     Animated.spring(tabOffsetValue, {
        //       toValue: getWidth(),
        //       useNativeDriver: true
        //     }).start();
        //   }
        // })}
        
        ></Tab.Screen>

        <Tab.Screen name={"Notifications"} component={NotificationScreen} options={{
    
          tabBarIcon: ({ focused }) => (
            <View  style={focused? styles.TouchableTab:{}}>

         
            <View  style={focused?styles.ActiveTab: styles.inActiveTab}>
              <Image source={globalPath.plus} style={{
                width: 22,
                height: 22,
                tintColor: 'white',
              }}></Image>
            </View>
            </View>
          )
        }} ></Tab.Screen>


      </Tab.Navigator>

    </View>

  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

function EmptyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActiveTab:{
    width: 55,
    height: 55,
    backgroundColor: 'red',
    borderRadius: 30,
    borderWidth:3,
    borderColor:colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30
    // marginBottom: Platform.OS == "android" ?80 : 30
  },
  inActiveTab:{
    
  },
  TouchableTab:{
    backgroundColor:'white',padding:2,
            width: 60,
            bottom:10,
                height: 60,
                borderRadius: 30,
                alignItems:'center',
  }
});
