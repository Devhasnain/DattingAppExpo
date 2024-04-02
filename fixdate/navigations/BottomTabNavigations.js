import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { Icon } from "react-native-paper";
import Posts from "../screens/posts";
import Chat from "../screens/chat";
import Profile from "../screens/profile";
import { View } from "react-native";
import {Entypo, Ionicons} from "@expo/vector-icons";

const tabBarStyle = {
  position: "relative",
  height: 65,
};
const borderTopStyles = {
  height: 2,
  width: "100%",
  elevation: 1.5,
  aspectRatio: 1,
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "#1F82C4",
};

const Tab = createBottomTabNavigator();

const BottomTabNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
        },
        tabBarActiveTintColor: "#1F82C4",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Icon source={"cards"} color="#1F82C4" size={33} />
              <View
                style={{
                  display: focused ? "flex" : "none",
                  ...borderTopStyles,
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="posts"
        component={Posts}
        options={{
          headerShown: false,
          tabBarStyle,
          tabBarIcon: ({ focused }) => (
            <>
              <Entypo name={"grid"} color="#1F82C4" size={35} />
              <View
                style={{
                  display: focused ? "flex" : "none",
                  ...borderTopStyles,
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Ionicons name={"chatbubbles-sharp"} color="#1F82C4" size={30} />
              <View
                style={{
                  display: focused ? "flex" : "none",
                  ...borderTopStyles,
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Icon source={"account"} color="#1F82C4" size={34} />
              <View
                style={{
                  display: focused ? "flex" : "none",
                  ...borderTopStyles,
                }}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigations;
