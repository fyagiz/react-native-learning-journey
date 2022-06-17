import { TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { startgameScreenStyles } from "../styles/screenStyles";
import { useState } from "react";
import { StartGameScreenProps } from "../types/PropTypes";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen(props: StartGameScreenProps) {
    const [enteredNumber, setEnteredNumber] = useState("");

    function numberInputHandler(enteredText: string) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber("");
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number.", "Number has to be a number between 1 and 99.", [
                { text: "Okay", style: "destructive", onPress: resetInputHandler },
            ]);
            return;
        }
        props.onPickNumber(chosenNumber);
    }

    return (
        <View style={startgameScreenStyles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={startgameScreenStyles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={startgameScreenStyles.buttonsContainer}>
                    <View style={startgameScreenStyles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={startgameScreenStyles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;
