import { FlatList } from "react-native";

import CategoryGridTile from "../components/categoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import Category from "../models/Category";
import { CategoriesScreenProps } from "../types/Props";

function CategoriesScreen(props: CategoriesScreenProps) {
    function renderCategoryItem(category: Category) {
        function pressHandler() {
            props.navigation.navigate("MealsOverview");
        }

        return <CategoryGridTile title={category.title} color={category.color} onPress={pressHandler} />;
    }

    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={(itemData) => renderCategoryItem(itemData.item)} numColumns={2} />
    );
}
export default CategoriesScreen;
