import { Text, View, Alert } from "react-native";
import { ReactNode, useState } from "react";
import Title from "../components/ui/Title";
import { gameScreenStyles } from "../styles/screenStyles";
import { GameScreenProps } from "../types/PropTypes";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomNumber(min: number, max: number, exclude: number): number {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(this: ReactNode, props: GameScreenProps) {
    const initialGuess = generateRandomNumber(minBoundary, maxBoundary, props.userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(isBigger: boolean) {
        if (
            (isBigger === false && currentGuess < props.userNumber) ||
            (isBigger === true && currentGuess > props.userNumber)
        ) {
            Alert.alert("Dont lie!", "You know that this is wrong!", [{text: "Sorry!", style:"cancel"}])
            return;
        }
            if (isBigger === false) {
                maxBoundary = currentGuess;
            } else {
                minBoundary = currentGuess + 1;
            }
        const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
    }

    return (
        <View style={gameScreenStyles.screen}>
            <View>
                <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, false)}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, true)}>+</PrimaryButton>
                </View>
            </View>
            <View>{/* LOG */}</View>
        </View>
    );
}

export default GameScreen;
