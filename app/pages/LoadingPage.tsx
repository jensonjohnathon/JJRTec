import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuthStore from "../stores/authStore";

// Define types for navigation
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type NavigationProp =
  import("@react-navigation/native").NavigationProp<RootStackParamList>;

const LoadingPage = () => {
  const navigation = useNavigation<NavigationProp>();
  const { authenticated, setLoading } = useAuthStore(); // Use 'authenticated' instead of 'isAuthenticated'

  useEffect(() => {
    // Simulate checking JWT or other async task
    setTimeout(() => {
      setLoading(false);
      if (authenticated) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Login");
      }
    }, 2000); // Simulate 2-second loading time
  }, [authenticated, setLoading, navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingPage;
