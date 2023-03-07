import { Text, View, StyleSheet } from "react-native";

type mealDetailProps = {
  duration: number;
  complexity: string;
  affordability: string;
  containerStyle?: Object;
  textStyle?: Object;
};

function MealDetails(props: mealDetailProps) {
  const { duration, complexity, affordability, containerStyle, textStyle } = props;

  return (
    <View style={[styles.details, containerStyle]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
