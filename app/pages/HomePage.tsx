import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuthStore from "../stores/authStore";

// Define navigation types
type RootStackParamList = {
    Login: undefined;
};

type NavigationProp =
    import("@react-navigation/native").NavigationProp<RootStackParamList>;

const HomePage = () => {
    const navigation = useNavigation<NavigationProp>();
    const { setAuthenticated } = useAuthStore();

    const handleLogout = () => {
        setAuthenticated(false);
        navigation.navigate("Login"); // Type-safe navigation
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Page!</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});

export default HomePage;
