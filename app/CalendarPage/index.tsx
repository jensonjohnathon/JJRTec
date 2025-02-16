import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import useAuthStore from "../stores/authStore";
import styles from "./styles";
import LoadingOverlay from "../../components/LoadingOverlay";
import { Calendar } from "react-native-big-calendar";
import dayjs from "dayjs";
import "dayjs/locale/de";

dayjs.locale("de");

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
            <View style={{ marginBottom: 10 }}>
                <Picker
                    selectedValue={viewMode}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) => setViewMode(itemValue)}
                >
                    <Picker.Item label="Tagesansicht" value="day" />
                    <Picker.Item label="3 Tage" value="3days" />
                    <Picker.Item label="Woche" value="week" />
                    <Picker.Item label="Monat" value="month" />
                </Picker>
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
                    locale="de"
                    weekStartsOn={1}
                    weekEndsOn={0}
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
