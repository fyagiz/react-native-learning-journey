import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

import { RootStackParamList } from "../App";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummyData";
import Meal from "../models/Meal";

type mealDetailScreenNavigationType = NativeStackNavigationProp<RootStackParamList, "MealDetail">;

function MealDetailScreen() {
  const navigation = useNavigation<mealDetailScreenNavigationType>();
  const route = useRoute<RouteProp<RootStackParamList, "MealDetail">>();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal: Meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal!.duration}
        complexity={selectedMeal!.complexity}
        affordability={selectedMeal!.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal!.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal!.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
