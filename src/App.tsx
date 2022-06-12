import { ImageBackground, KeyboardAvoidingView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { rootStyles } from "./styles/AppStyles";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
    return (
        <LinearGradient colors={["#3b021f", "#ddb52f"]} style={rootStyles.rootScreen}>
            <ImageBackground
                source={require("./assets/images/background.jpg")}
                resizeMode="cover"
                style={rootStyles.rootScreen}
                imageStyle={rootStyles.backgroundImage}
            >
                <StartGameScreen />
                
            </ImageBackground>
        </LinearGradient>
    );
}
