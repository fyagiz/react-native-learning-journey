import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { GlobalStyles } from "../../constants/styles";

type ButtonPropsType = { children: string; onPress: () => void; mode?: "flat"; style?: StyleProp<ViewStyle> };

function Button(props: ButtonPropsType) {
  const { children, onPress, mode, style } = props;
  const isFlat = mode === "flat";
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={[styles.button, isFlat && styles.flat]}>
          <Text style={[styles.buttonText, isFlat && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
