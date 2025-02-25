import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import CalendarPage from "../CalendarPage";

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Loading"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Calendar" component={CalendarPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
