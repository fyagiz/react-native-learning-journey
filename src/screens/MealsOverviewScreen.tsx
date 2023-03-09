import { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { MEALS, CATEGORIES } from "../data/dummyData";
import Category from "../models/Category";
import MealsList from "../components/MealsList/MealsList";

type mealsOverviewScreenNavigationType = NativeStackNavigationProp<RootStackParamList, "MealsOverview">;

function MealsOverviewScreen() {
  const navigation = useNavigation<mealsOverviewScreenNavigationType>();
  const route = useRoute<RouteProp<RootStackParamList, "MealsOverview">>();

  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category: Category) => category.id === categoryId)?.title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
