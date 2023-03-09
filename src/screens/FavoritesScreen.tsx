// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummyData";
import { RootState } from "../store/redux/store";
// import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  // const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state: RootState) => state.favoriteMeals.ids);

  // const favoriteMeals = MEALS.filter((meal) => favoriteMealContext.ids.includes(meal.id));
  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
