import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { startGameScreenStyle } from "../styles/ScreenStyles";

function StartGameScreen() {
    return (
        <View style={startGameScreenStyle.inputContainer}>
            <TextInput
                style={startGameScreenStyle.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={startGameScreenStyle.buttonsContainer}>
                <View style={startGameScreenStyle.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={startGameScreenStyle.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;
