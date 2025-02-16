import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import useAuthStore from "../stores/authStore";
import styles from "./styles";
import LoadingOverlay from "../../components/LoadingOverlay";
import { Calendar } from "react-native-big-calendar";

const CalendarPage = () => {
    const { setAuthenticated } = useAuthStore();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState<
        "day" | "3days" | "week" | "month"
    >("week"); // State variable to store the selected view mode

    React.useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setLoading(false);
        }, 1);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Calendar Page!</Text>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Button title="Day" onPress={() => setViewMode("day")} />
                <Button title="3 Days" onPress={() => setViewMode("3days")} />
                <Button title="Week" onPress={() => setViewMode("week")} />
                <Button title="Month" onPress={() => setViewMode("month")} />
            </View>
            <View style={{ height: "60%", width: "30%" }}>
                <Calendar
                    events={[
                        {
                            title: "Meeting",
                            start: new Date(2025, 1, 16, 10, 0),
                            end: new Date(2025, 1, 16, 10, 45),
                            backgroundColor: "green",
                        },
                        {
                            title: "Workshop",
                            start: new Date(2025, 1, 16, 13, 0),
                            end: new Date(2025, 1, 16, 15, 0),
                            backgroundColor: "orange",
                        },
                    ]}
                    height={800} // Adjust the height here if needed
                    mode={viewMode} // Set the view mode based on the selected value
                    scrollOffsetMinutes={300} // Start at 5:00 AM (300 minutes from midnight)
                    eventCellStyle={(event) => ({
                        backgroundColor: event.backgroundColor || "orange", // Default color is orange
                        borderRadius: 5,
                        padding: 5,
                    })}
                />
            </View>
            <LoadingOverlay visible={loading} />
        </View>
    );
};

export default CalendarPage;
