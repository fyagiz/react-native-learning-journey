import { StyleSheet } from "react-native";
import Colors from "../constants/colors";

export const startgameScreenStyles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },

    buttonsContainer: {
        flexDirection: "row",
    },

    buttonContainer: {
        flex: 1,
    },
});

export const gameScreenStyles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    }
});
