import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuthStore from "../stores/authStore";

// Define navigation types
type RootStackParamList = {
    Home: undefined;
};

type NavigationProp =
    import("@react-navigation/native").NavigationProp<RootStackParamList>;

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation<NavigationProp>();
    const { setAuthenticated } = useAuthStore();

    const handleLogin = () => {
        // Simulate login check
        if (username === "admin" && password === "password") {
            setAuthenticated(true);
            navigation.navigate("Home"); // Type-safe navigation
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    },
});

export default LoginPage;
