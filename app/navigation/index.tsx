import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingPage from "../pages/LoadingPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Loading" component={LoadingPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
