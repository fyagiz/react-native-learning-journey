import { View } from "react-native";
import { cardStyles } from "../../styles/componentStyles";
import { CardProps } from "../../types/PropTypes";

function Card(props: CardProps){
    return (
        <View style={cardStyles.inputContainer}>{props.children}</View>
    );
}

export default Card;