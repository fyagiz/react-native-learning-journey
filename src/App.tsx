import { ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import { rootStyles } from "./styles/appStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/gameScreen";
import GameOverScreen from "./screens/gameOverScreen";
import Colors from "./constants/colors";

export default function App() {
    const [userNumber, setUserNumber] = useState(Number);
    const [gameIsOver, setGameIsOver] = useState(true);

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(){
        setGameIsOver(true);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen />
    }


    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={rootStyles.rootScreen}>
            <ImageBackground
                source={require("./assets/images/background.jpg")}
                resizeMode="cover"
                style={rootStyles.rootScreen}
                imageStyle={rootStyles.backgroundImage}
            >
                <SafeAreaView style={rootStyles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}
