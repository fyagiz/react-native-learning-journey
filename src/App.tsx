import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import IGoal from "./interfaces/IGoal";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [goals, setGoals] = useState<IGoal[]>([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function addGoalHandler(enteredGoalText: string) {
        setGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        endAddGoalHandler();
    }

    function deleteGoalHandler(id: string) {
        setGoals((goals) => {
            return goals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <>
            <StatusBar style='dark'/>
            <View style={styles.appContainer}>
                <Button title="Add new Goal" color="#5e0acc" onPress={startAddGoalHandler} />
                <GoalInput
                    visible={modalIsVisible}
                    onAddGoal={addGoalHandler}
                    onCancel={endAddGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem goal={itemData.item} onDeleteItem={deleteGoalHandler} />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: "pink",
    },
    goalsContainer: {
        flex: 5,
    },
});
