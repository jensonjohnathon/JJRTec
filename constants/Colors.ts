/**
 * Below are the colors used in the app, defined for both light and dark modes.
 * DarkMode is set as the default theme.
 */

const defaultPrimary = "#6A0DAD";
const defaultSecondary = "#CD7F32";

export const Colors = {
    dark: {
        primary: defaultPrimary,
        secondary: defaultSecondary,
        background: "#272727",
        tint: "#474747",
        text: "#E0E0E0",
        error: "#FF4D4D",
        success: "#4CAF50",
        neutral: "#7D7D7D",
    },
    light: {
        primary: defaultPrimary,
        secondary: "#E2B87A",
        background: "#F8F8F8",
        tint: "#E0E0E0", // Adjust as needed
        text: "#333333", // Adjust as needed
        error: "<undecided>", // Replace when decided
        success: "<undecided>", // Replace when decided
        neutral: "<undecided>", // Replace when decided
    },
};

// Default export for DarkMode
export const DefaultColors = Colors.dark;
