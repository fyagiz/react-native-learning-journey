import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import IGoal from "./interfaces/IGoal";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState<IGoal[]>([]);

    function addGoalHandler(enteredGoalText: string) {
        setGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    }

    function deleteGoalHandler(id: string) {
        setGoals(goals => {
            return goals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return <GoalItem goal={itemData.item} onDeleteItem={deleteGoalHandler} />;
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
    },
});
