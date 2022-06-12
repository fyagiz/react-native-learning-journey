import { Text, View, SafeAreaView } from "react-native";
import Title from "../components/Title";
import { gameScreenStyles } from "../styles/ScreenStyles";

function GameScreen() {
    return (
        <View style={gameScreenStyles.screen}>
            <View>
                <Title>Opponent's Guess</Title>
                {/* GUESS */}
            </View>
            <View>
                <Text>Higher or Lower?</Text>
                {/* + - */}
            </View>
            <View>
                {/* LOG */}
            </View>
        </View>
    );
}

export default GameScreen;
