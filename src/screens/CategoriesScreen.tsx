import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, ListRenderItemInfo } from "react-native";
import { RootStackParamList } from "../App";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import Category from "../models/Category";

type categoriesScreenPropsType = NativeStackNavigationProp<RootStackParamList, "MealsCategories">;

function CategoriesScreen() {
    const navigation = useNavigation<categoriesScreenPropsType>();

    function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
        function pressHandler() {
            navigation.navigate("MealsOverview");
        }

        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
    }

    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} numColumns={2} />;
}

export default CategoriesScreen;
