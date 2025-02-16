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
            <View style={{ height: 800, width: "30%" }}>
                {" "}
                {/* Adjust the height and width here */}
                <Calendar
                    events={[
                        {
                            title: "Meeting",
                            start: new Date(2021, 10, 17, 10, 0),
                            end: new Date(2021, 10, 17, 10, 45),
                        },
                    ]}
                    mode="3days" // Set the view to week
                    scrollOffsetMinutes={300} // Start at 5:00 AM (300 minutes from midnight)
                    height={600} // Adjust the height here if needed
                    renderEvent={(event) => (
                        <View
                            style={{
                                backgroundColor: "green",
                                borderRadius: 0,
                                opacity: 0.8,
                                borderWidth: 0,
                                padding: 5,
                            }}
                        >
                            <Text style={{ color: "black" }}>
                                {event.title}
                            </Text>
                        </View>
                    )}
                />
            </View>
            <LoadingOverlay visible={loading} />
        </View>
    );
};

export default CalendarPage;
