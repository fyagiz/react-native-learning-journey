import { View, Text, Pressable, Button } from "react-native";
import { primaryButtonStyle } from "../styles/ComponentStyles";

function PrimaryButton(props: { children: string }) {

    function pressHandler() {
        console.log("Pressed!");
    }

    return (
        <View style={primaryButtonStyle.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [primaryButtonStyle.buttonInnerContainer, primaryButtonStyle.pressed]
                        : primaryButtonStyle.buttonInnerContainer
                }
                onPress={pressHandler}
                onFocus={pressHandler}
                android_ripple={{ color: "#640233" }}
            >
                <Text style={primaryButtonStyle.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;
