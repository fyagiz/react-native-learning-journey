import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

type InputPropsType = { label: string; textInputConfig: TextInputProps; style?: StyleProp<ViewStyle> };

function Input(props: InputPropsType) {
  const { label, textInputConfig, style } = props;
  const inputStyles: Array<StyleProp<TextStyle>> = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
