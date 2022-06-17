import { View, Image, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { gameOverScreenStyles } from "../styles/screenStyles";

function GameOverScreen() {
    return (
        <View style={gameOverScreenStyles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={gameOverScreenStyles.imageContainer}>
                <Image style={gameOverScreenStyles.image} source={require("../assets/images/success.jpg")} />
            </View>
            <Text style={gameOverScreenStyles.summaryText}>
                Your phone needed <Text style={gameOverScreenStyles.highlight}>X</Text> rounds to guess the number{" "}
                <Text style={gameOverScreenStyles.highlight}>Y</Text>.
            </Text>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;
