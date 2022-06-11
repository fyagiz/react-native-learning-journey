import { View, Text, Pressable, Button } from "react-native";
import { primaryButtonStyle } from "../styles/ComponentStyles";
import { PrimaryButtonProps } from "../types/PropTypes";

function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <View style={primaryButtonStyle.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [primaryButtonStyle.buttonInnerContainer, primaryButtonStyle.pressed]
                        : primaryButtonStyle.buttonInnerContainer
                }
                onPress={props.onPress}
                android_ripple={{ color: "#640233" }}
            >
                <Text style={primaryButtonStyle.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;
