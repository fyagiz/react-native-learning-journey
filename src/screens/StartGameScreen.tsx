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
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;
