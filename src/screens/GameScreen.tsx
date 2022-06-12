import { Text, View, SafeAreaView } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import { gameScreenStyles } from "../styles/screenStyles";
import { GameScreenProps } from "../types/PropTypes";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min: number, max: number, exclude: number): number {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}

function GameScreen(props: GameScreenProps) {
    const initialGuess = generateRandomBetween(1, 100, props.userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    return (
        <View style={gameScreenStyles.screen}>
            <View>
                <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <View>
                <Text>Higher or Lower?</Text>
                {/* + - */}
            </View>
            <View>{/* LOG */}</View>
        </View>
    );
}

export default GameScreen;
