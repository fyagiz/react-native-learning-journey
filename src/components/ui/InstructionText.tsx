import { Text } from "react-native";
import { InstructionTextProps } from "../../types/PropTypes";
import { instructionTextStyles } from "../../styles/componentStyles";

function InstructionText(props:InstructionTextProps){
    return (
        <Text style={[instructionTextStyles.instructionText, props.style]}>{props.children}</Text>
    );
}

export default InstructionText;