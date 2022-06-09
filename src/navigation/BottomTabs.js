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

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function BottomTabs() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex:1}}>


      <Tab.Navigator 
      style={{marginHorizontal:20}}
      // sceneContainerStyle={{marginHorizontal:20,backgroundColor:'red'}}
      screenOptions={{
        showLabel: true,
        
        // Floating Tab Bar...
        
        tabBarStyle: {
          backgroundColor: 'purple',
          height: 50,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
          marginHorizontal:20
        },
        // tabBarStyle
      //  style:{
      //    marginHorizontal:20
      //  }
      }}>

        {
          // Tab Screens....

          // Tab ICons....
        }
        <Tab.Screen name={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'relative',
              top: 20
            }}>
              <Image source={globalPath.plus} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Search"} component={SearchScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              {/* <FontAwesome5
                name="search"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5> */}
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>


        {

          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
          tabBarIcon: ({ focused }) => (

            <TouchableOpacity>
              <View style={{
                width: 55,
                height: 55,
                backgroundColor: 'red',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: Platform.OS == "android" ? 50 : 30
              }}>
                <Image source={globalPath.plus} style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}></Image>
              </View>
            </TouchableOpacity>
          )
        }}></Tab.Screen>

        <Tab.Screen name={"Notifications"} component={NotificationScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              {/* <FontAwesome5
                name="bell"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5> */}
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              {/* <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? 'red' : 'gray'}
              ></FontAwesome5> */}
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

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
});
