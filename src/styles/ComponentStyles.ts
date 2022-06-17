import { StyleSheet } from "react-native";
import Colors from "../constants/colors";

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
        fontFamily: "open-sans-bold",
        fontSize: 24,
        color: "white",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
    },
});

export const numberContainerStyles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontFamily: "open-sans-bold"
    },
});

export const cardStyles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});

export const instructionTextStyles = StyleSheet.create({
    instructionText: {
        fontFamily: "open-sans",
        color: Colors.accent500,
        fontSize: 24
    },
})