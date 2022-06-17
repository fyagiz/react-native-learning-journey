import { View, Alert, Text, FlatList } from "react-native";
import { ReactNode, useState, useEffect } from "react";
import Title from "../components/ui/Title";
import { gameScreenStyles } from "../styles/screenStyles";
import { GameScreenProps } from "../types/PropTypes";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

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
    const initialGuess = generateRandomNumber(1, 100, props.userNumber);
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
    const [guessRounds, setGuessRounds] = useState<Array<number>>([initialGuess])

    useEffect(() => {
        if (currentGuess === props.userNumber) {
            props.onGameOver(guessRounds.length);
        }
    }, [currentGuess, props.userNumber, props.onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(isBigger: boolean) {
        if ((isBigger === false && currentGuess < props.userNumber) || (isBigger === true && currentGuess > props.userNumber)) {
            Alert.alert("Dont lie!", "You know that this is wrong!", [{ text: "Sorry!", style: "cancel" }]);
            return;
        }
        if (isBigger === false) {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
        setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds]);
    }

    const guessRoundListLenght = guessRounds.length;

    return (
        <View style={gameScreenStyles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={gameScreenStyles.instructionText}>Higher or Lower?</InstructionText>
                <View style={gameScreenStyles.buttonsContainer}>
                    <View style={gameScreenStyles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, false)}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={gameScreenStyles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, true)}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={gameScreenStyles.listContainer}>
                <FlatList data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLenght - itemData.index} guess={itemData.item}/>} keyExtractor={(item) => item.toString()} />
            </View>
        </View>
    );
}

export default GameScreen;
