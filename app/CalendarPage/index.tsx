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
    const [currentDate, setCurrentDate] = useState(new Date()); // State variable to store the current date

    React.useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setLoading(false);
        }, 1);
    }, []);

    const handlePrev = () => {
        let newDate;
        switch (viewMode) {
            case "day":
                newDate = dayjs(currentDate).subtract(1, "day").toDate();
                break;
            case "3days":
                newDate = dayjs(currentDate).subtract(3, "day").toDate();
                break;
            case "week":
                newDate = dayjs(currentDate).subtract(1, "week").toDate();
                break;
            case "month":
                newDate = dayjs(currentDate).subtract(1, "month").toDate();
                break;
            default:
                newDate = currentDate;
        }
        setCurrentDate(newDate);
    };

    const handleNext = () => {
        let newDate;
        switch (viewMode) {
            case "day":
                newDate = dayjs(currentDate).add(1, "day").toDate();
                break;
            case "3days":
                newDate = dayjs(currentDate).add(3, "day").toDate();
                break;
            case "week":
                newDate = dayjs(currentDate).add(1, "week").toDate();
                break;
            case "month":
                newDate = dayjs(currentDate).add(1, "month").toDate();
                break;
            default:
                newDate = currentDate;
        }
        setCurrentDate(newDate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Calendar Page!</Text>
            <Button title="Today" onPress={() => setCurrentDate(new Date())} />
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
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <Button title="Previous" onPress={handlePrev} />
                <Button title="Next" onPress={handleNext} />
            </View>
            <View style={{ height: "60%", width: "50%" }}>
                {" "}
                {/* Adjust the height and width here */}
                <Calendar
                    events={[
                        {
                            title: "Meeting",
                            start: new Date(2025, 1, 16, 10, 0), // February is month 1 (0-indexed)
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
                    date={currentDate} // Set the current date
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
