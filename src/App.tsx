import { View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { rootStyles } from "./styles/AppStyles"

export default function App() {
    return (
        <View style={rootStyles.rootScreen}>
            <StartGameScreen />
        </View>
    );
}
