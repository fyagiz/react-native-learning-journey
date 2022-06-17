import { Text, View } from "react-native";
import { guessLogItemStyles } from "../../styles/componentStyles";
import { GuessLogItemProps } from "../../types/PropTypes";

function GuessLogItem(props: GuessLogItemProps) {
    return (
        <View style={guessLogItemStyles.listItem}>
            <Text style={guessLogItemStyles.itemText}>#{props.roundNumber}</Text>
            <Text style={guessLogItemStyles.itemText}>Opponent's Guess: {props.guess}</Text>
        </View>
    );
}

export default GuessLogItem;