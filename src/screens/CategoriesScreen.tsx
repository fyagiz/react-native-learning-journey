import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, ListRenderItemInfo } from "react-native";

import { RootStackParamList } from "../App";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import Category from "../models/Category";

type categoriesScreenNavigationType = NativeStackNavigationProp<RootStackParamList>;

function CategoriesScreen() {
  const navigation = useNavigation<categoriesScreenNavigationType>();

  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }

    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  }

  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />;
}

export default CategoriesScreen;
