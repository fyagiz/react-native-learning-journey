import { Text } from "react-native";
import { titleStyles } from "../styles/ComponentStyles";
import { TitleProps } from "../types/PropTypes";

function Title(props: TitleProps) {
    return <Text style={titleStyles.text}>{props.children}</Text>
}

export default Title;