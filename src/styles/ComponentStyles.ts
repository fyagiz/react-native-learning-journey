import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export const primaryButtonStyles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },

    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },

    buttonText: {
        color: "white",
        textAlign: "center",
    },

    pressed: {
        opacity: 0.75,
    },
});

export const titleStyles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.accent500,
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
    },
});
