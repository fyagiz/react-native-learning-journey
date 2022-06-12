import { ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import { rootStyles } from "./styles/appStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/gameScreen";

export default function App() {
    const [userNumber, setUserNumber] = useState(Number);

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen />;
    }

    return (
        <LinearGradient colors={["#3b021f", "#ddb52f"]} style={rootStyles.rootScreen}>
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
