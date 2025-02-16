import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useLogin } from "./useLogin";
import useAuthStore from "../stores/authStore";
import styles from "./styles";
import LoadingOverlay from "@/components/LoadingOverlay";

const LoginPage = () => {
    const {
        username,
        setUsername,
        password,
        setPassword,
        handleLogin,
        routeToRegisterPage,
    } = useLogin();
    const { loading } = useAuthStore();

    return (
        <View style={styles.container}>
            <LoadingOverlay visible={loading} />
            <Text style={styles.title}>Login</Text>
            <TextInput
                placeholder="Nutzername"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Passwort"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Registrierung" onPress={routeToRegisterPage} />
        </View>
    );
};

export default LoginPage;
