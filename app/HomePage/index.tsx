import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import useAuthStore from "../stores/authStore";
import styles from "./styles";
import LoadingOverlay from "../../components/LoadingOverlay";

const HomePage = () => {
    const { setAuthenticated } = useAuthStore();
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);

    const handleLogout = () => {
        setAuthenticated(false);
        router.push("/LoginPage");
    };

    React.useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setLoading(false);
        }, 1);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Page!</Text>
            <Button title="Logout" onPress={handleLogout} />
            <LoadingOverlay visible={loading} />
        </View>
    );
};

export default HomePage;
