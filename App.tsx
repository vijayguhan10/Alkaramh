import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MobileLoginScreen from "./components/Login/Login"; 
import Otp from "./components/Login/otp/Otp";
import Profile from "./components/Profile/Profile";
import Products from "./components/Products/Products";
import Footer from "./Utils/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";


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
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={MobileLoginScreen} />
      <Stack.Screen name="otp" component={Otp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

