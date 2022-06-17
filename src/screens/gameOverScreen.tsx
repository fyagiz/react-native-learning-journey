import { View, Image, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { gameOverScreenStyles } from "../styles/screenStyles";
import { GameOverScreenProps } from "../types/PropTypes";

function GameOverScreen(props: GameOverScreenProps) {
    return (
        <View style={gameOverScreenStyles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={gameOverScreenStyles.imageContainer}>
                <Image style={gameOverScreenStyles.image} source={require("../assets/images/success.jpg")} />
            </View>
            <Text style={gameOverScreenStyles.summaryText}>
                Your phone needed <Text style={gameOverScreenStyles.highlight}>{props.roundsNumber}</Text> rounds to guess the number{" "}
                <Text style={gameOverScreenStyles.highlight}>{props.userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;
