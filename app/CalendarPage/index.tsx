import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import useAuthStore from "../stores/authStore";
import styles from "./styles";
import LoadingOverlay from "../../components/LoadingOverlay";
import { Calendar } from "react-native-big-calendar";

const CalendarPage = () => {
    const { setAuthenticated } = useAuthStore();
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setLoading(false);
        }, 1);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Calendar Page!</Text>
            <View style={{ height: "40%", width: "30%" }}>
                <Calendar
                    events={[
                        {
                            title: "Meeting",
                            start: new Date(2025, 1, 16, 1, 0),
                            end: new Date(2025, 1, 16, 10, 45),
                        },
                    ]}
                    mode="week" // Set the view to week
                    scrollOffsetMinutes={300} // Start at 5:00 AM (300 minutes from midnight)
                    height={800} // Adjust the height here if needed
                />
            </View>
            <LoadingOverlay visible={loading} />
        </View>
    );
};

export default CalendarPage;
