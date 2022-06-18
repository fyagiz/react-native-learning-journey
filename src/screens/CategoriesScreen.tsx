import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import Category from "../models/Category";
import { CategoriesScreenProps } from "../types/Props";

function CategoriesScreen(props: CategoriesScreenProps) {
    function renderCategoryItem(category: Category) {
        function pressHandler() {
            props.navigation.navigate("MealsOverview", {categoryID: category.ID});
        }

        return <CategoryGridTile title={category.title} color={category.color} onPress={pressHandler} />;
    }

    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.ID} renderItem={(itemData) => renderCategoryItem(itemData.item)} numColumns={2} />
    );
}
export default CategoriesScreen;
