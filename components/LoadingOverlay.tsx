import React from "react";
import { StyleSheet, View, ActivityIndicator, ViewStyle } from "react-native";
// ActivityIndicator could later be replaced by something like https://github.com/maxs15/react-native-spinkit
import { DefaultColors } from "@/constants/Colors";

interface LoadingOverlayProps {
    visible: boolean;
    // Optional: customize the style if needed (e.g. different backgrounds)
    style?: ViewStyle;
    // Optional: set a spinner color or size
    spinnerColor?: string;
    spinnerSize?: "small" | "large";
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
    visible,
    style,
    spinnerColor = DefaultColors.primary,
    spinnerSize = "large",
}) => {
    if (!visible) return null;

    return (
        <View style={[styles.overlay, style]}>
            <ActivityIndicator size={spinnerSize} color={spinnerColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject, // covers entire parent
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
    },
});

export default LoadingOverlay;
