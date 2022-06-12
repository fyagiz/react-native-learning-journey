import { TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { startGameScreenStyle } from "../styles/ScreenStyles";
import { useState } from "react";
import { StartGameScreenProps } from "../types/PropTypes";

function StartGameScreen(props: StartGameScreenProps) {
    const [enteredNumber, setEnteredNumber] = useState("");

    function numberInputHandler(enteredText: string) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler(){
        setEnteredNumber("");
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number.", "Number has to be a number between 1 and 99.", [
                { text: "Okay", style: "destructive", onPress: resetInputHandler},
            ]);
            return;
        }
        props.onPickNumber(chosenNumber);
    }

    return (
        <View style={startGameScreenStyle.inputContainer}>
            <TextInput
                style={startGameScreenStyle.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={startGameScreenStyle.buttonsContainer}>
                <View style={startGameScreenStyle.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={startGameScreenStyle.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;
