import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MobileLoginScreen from "./components/Login/Login"; 
import Otp from "./components/Login/otp/Otp";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./components/Homepage/Home";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Routers />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
const Routers = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Home} />
      <Stack.Screen name="otp" component={Otp}/>
    </Stack.Navigator>
  );
};

