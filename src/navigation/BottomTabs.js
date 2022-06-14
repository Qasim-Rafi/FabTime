import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Animated,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useRef } from "react";
import { globalPath } from "../constants/globalPath";
import { colors } from "../constants/colorsPallet";
import Home from "../screens/Home/Home";
import { wp } from "../helpers/Responsiveness";
import Dashboard from "../screens/Home/Dashboard";
const Tab = createBottomTabNavigator();

// Hiding Tab Names...
export default function BottomTabs() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        style={{ marginHorizontal: 10 }}
        // sceneContainerStyle={{marginHorizontal:20,backgroundColor:'red'}}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.red,
          tabBarInactiveTintColor: colors.white,

          // Floating Tab Bar...
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "bold",
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
              height: 90,
            },
            marginBottom: 20,
            paddingHorizontal: 20,
            marginHorizontal: wp(13),
            position: "absolute",
            // justifyContent:'center',
            paddingTop: Platform.OS == 'ios' ? 20 : 0
          },
          //  }
        }}
      >
        <Tab.Screen
          name={"Empty"}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.TouchableTab : {}}>
                <View style={focused ? styles.ActiveTab : styles.inActiveTab}>
                  <Image
                    source={globalPath.checkin}
                    resizeMode={"contain"}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: "white",
                    }}
                  ></Image>
                </View>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"REPORT"}
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.TouchableTab : {}}>
                <View style={focused ? styles.ActiveTab : styles.inActiveTab}>
                  <Image
                    source={globalPath.report}
                    resizeMode={"contain"}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: "white",
                    }}
                  ></Image>
                </View>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"DASHBOARD"}
          component={Dashboard}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.TouchableTab : {}}>
                <View style={focused ? styles.ActiveTab : styles.inActiveTab}>
                  <Image
                    source={globalPath.dashboard}
                    resizeMode={"contain"}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: "white",
                    }}
                  ></Image>
                </View>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"History"}
          component={History}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.TouchableTab : {}}>
                <View style={focused ? styles.ActiveTab : styles.inActiveTab}>
                  <Image
                    source={globalPath.history}
                    resizeMode={"contain"}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: "white",
                    }}
                  ></Image>
                </View>
              </View>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"report"}
          component={Report}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={focused ? styles.TouchableTab : {}}>
                <View style={focused ? styles.ActiveTab : styles.inActiveTab}>
                  <Image
                    source={globalPath.report}
                    resizeMode={"contain"}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: "white",
                    }}
                  ></Image>
                </View>
              </View>
            ),
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </View>
  );
}


function EmptyScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}
function History() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>History!</Text>
    </View>
  );
}
function Report() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>History!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ActiveTab: {
    width: 55,
    height: 55,
    backgroundColor: colors.darkblue,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom:30
    // marginBottom: Platform.OS == "android" ?80 : 30
  },
  inActiveTab: {},
  TouchableTab: {
    backgroundColor: "white",
    padding: 2,
    width: 60,
    bottom: 10,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
});
