import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text } from "react-native";

import { RootStackParamList } from "../App";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import Category from "../models/Category";

type mealDetailScreenNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  "MealDetail"
>;

function MealDetailScreen() {
  const navigation = useNavigation<mealDetailScreenNavigationType>();
  const route = useRoute<RouteProp<RootStackParamList, "MealDetail">>();

  const mealId = route.params.mealId;

  return <Text>This is the meal detail screen. {mealId}</Text>;
}

export default MealDetailScreen;
