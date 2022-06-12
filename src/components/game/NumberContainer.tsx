import { Text, View } from "react-native";
import { numberContainerStyles } from "../../styles/componentStyles";
import { NumberContainerProps } from "../../types/PropTypes";

function NumberContainer(props : NumberContainerProps) {
    return (
        <View style={numberContainerStyles.container}>
            <Text style={numberContainerStyles.numberText}>{props.children}</Text>
        </View>
    );
}

export default NumberContainer;