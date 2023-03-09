import { useContext, useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

import { RootStackParamList } from "../App";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummyData";
import Meal from "../models/Meal";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux/store";
// import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

type mealDetailScreenNavigationType = NativeStackNavigationProp<RootStackParamList, "MealDetail">;

function MealDetailScreen() {
  // const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state: RootState) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const navigation = useNavigation<mealDetailScreenNavigationType>();
  const route = useRoute<RouteProp<RootStackParamList, "MealDetail">>();

  const mealId = route.params.mealId;
  // const mealIsFavorite = favoriteMealContext.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const selectedMeal = MEALS.find((meal: Meal) => meal.id === mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealContext.removeFavroite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealContext.addFavroite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

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
