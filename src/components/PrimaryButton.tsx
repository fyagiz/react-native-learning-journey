import { View, Text, Pressable, Button } from "react-native";
import Colors from "../constants/Colors";
import { primaryButtonStyles } from "../styles/componentStyles";
import { PrimaryButtonProps } from "../types/PropTypes";

function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <View style={primaryButtonStyles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [primaryButtonStyles.buttonInnerContainer, primaryButtonStyles.pressed]
                        : primaryButtonStyles.buttonInnerContainer
                }
                onPress={props.onPress}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={primaryButtonStyles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;
