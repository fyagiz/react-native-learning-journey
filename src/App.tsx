import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native";

interface Goal {
    text: string;
    id: string;
}

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState<string>("");
    const [goals, setGoals] = useState<Goal[]>([]);

    function goalInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setGoals((currentGoals) => [
            ...goals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your goal!"
                    onChangeText={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={goals}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.goalItem}>
                                <Text style={styles.goalText}>{itemData.item.text}</Text>
                            </View>
                        );
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
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 5,
    },
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
