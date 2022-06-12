import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export const startGameScreenStyles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
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
});
