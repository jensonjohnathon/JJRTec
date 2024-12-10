import React from "react";
import { View, TextInput, Button, Text, ActivityIndicator } from "react-native";
import { useLogin } from "./useLogin";
import useAuthStore from "../stores/authStore";
import styles from "./styles";
import LoadingOverlay from "@/components/LoadingOverlay";

const LoginPage = () => {
    const { username, setUsername, password, setPassword, handleLogin } =
        useLogin();
    const { loading } = useAuthStore();

    return (
        <View style={styles.container}>
            <LoadingOverlay visible={loading} /> {/* Use LoadingOverlay here */}
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

export default LoginPage;
