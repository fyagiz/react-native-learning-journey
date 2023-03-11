import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type IconButtonPropsType = { icon: keyof typeof Ionicons.glyphMap; size: number; color: string; onPress?: () => void };

function IconButton(props: IconButtonPropsType) {
  const { icon, size, color, onPress } = props;
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
