import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import useAuthStore from "../stores/authStore";
import styles from "./styles";

const HomePage = () => {
    const { setAuthenticated } = useAuthStore();
    const router = useRouter();

    const handleLogout = () => {
        setAuthenticated(false);
        router.push("/LoginPage");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Page!</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default HomePage;
