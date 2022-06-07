import { StyleSheet, View, Text } from "react-native";

import IGoal from "../interfaces/IGoal";

function GoalItem(props: { goal: IGoal }) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.goal.text}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    goalText: {
        color: "white",
    },
});
