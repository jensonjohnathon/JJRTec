import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useLogin } from "./useLogin";
import styles from "./styles";

const LoginPage = () => {
    const { username, setUsername, password, setPassword, handleLogin } =
        useLogin();

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

export default LoginPage;
