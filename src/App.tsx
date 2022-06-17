import { ImageBackground, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import { rootStyles } from "./styles/appStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState, useCallback } from "react";
import GameScreen from "./screens/gameScreen";
import GameOverScreen from "./screens/gameOverScreen";
import Colors from "./constants/colors";
import * as ExpoFont from "expo-font";
import * as ExpoSplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";

export default function App() {
    const [userNumber, setUserNumber] = useState<number | null>();
    const [gameIsOver, setGameIsOver] = useState<boolean>(true);
    const [guessRounds, setGuessRounds] = useState<number>(0);
    const [appIsReady, setAppIsReady] = useState<boolean>(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Promise.all([
                    ExpoSplashScreen.preventAutoHideAsync(),
                    ExpoFont.loadAsync({
                        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
                        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
                    }),
                    Asset.loadAsync(require("./assets/images/background.jpg")),
                    Asset.loadAsync(require("./assets/images/success.jpg")),
                ]);
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await ExpoSplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    function pickedNumberHandler(pickedNumber: number) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds: number) {
        setGameIsOver(true);
        setGuessRounds(numberOfRounds);
    }

    function startNewGameHandler() {
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
    }

    if (gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
    }

    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={rootStyles.rootScreen} onLayout={onLayoutRootView}>
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
