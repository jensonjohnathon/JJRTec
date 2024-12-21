import React from "react";
import { View, TextInput, Button, Text } from "react-native";
import { useRouter } from "expo-router";
import { useRegister } from "./useRegister";
import useAuthStore from "../stores/authStore";
import styles from "./styles";
import LoadingOverlay from "@/components/LoadingOverlay";

const RegisterPage = () => {
    const {
        username,
        setUsername,
        password,
        setPassword,
        email,
        setEmail,
        serverName,
        setServerName,
        handleRegister,
    } = useRegister();
    const { loading, registered } = useAuthStore();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <LoadingOverlay visible={loading} />
            <Text style={styles.title}>Registrierung</Text>
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
            <TextInput
                placeholder="E-Mail"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <LoadingOverlay visible={loading} />
            <Text style={styles.title}>Server Eintragung</Text>
            <TextInput
                placeholder="Server Name"
                value={serverName}
                onChangeText={setServerName}
                style={styles.input}
            />
            <Button title="Verbinden" onPress={handleRegister} />
        </View>
    );
};

export default RegisterPage;
