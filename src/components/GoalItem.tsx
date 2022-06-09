import { StyleSheet, View, Text, Pressable } from "react-native";

import IGoal from "../interfaces/IGoal";
import { TOnDeleteItem } from "../types/TGoalItem";

function GoalItem(this: any, props: { goal: IGoal; onDeleteItem: TOnDeleteItem }) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={props.onDeleteItem.bind(this, props.goal.id)}
            >
                <Text style={styles.goalText}>{props.goal.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: "white",
        padding: 8,
    },
});
