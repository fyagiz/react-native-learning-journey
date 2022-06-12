import { Dimensions, StyleSheet } from "react-native";

export const rootStyles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },

    backgroundImage: {
        opacity: 0.15,
        position: "absolute",
        left: 0,
        top: 0,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },
});
