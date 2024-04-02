import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigations from "./BottomTabNavigations";
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";
import Forget from "../screens/auth/forget";

const Stack = createNativeStackNavigator();

const StackNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabNavigations} options={{headerShown:false, animation:"slide_from_bottom"}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="Forget" component={Forget} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigations;
