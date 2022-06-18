import { FlatList } from "react-native";
import CategoryGridTile from "../components/categoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import Category from "../models/Category";

function renderCategoryItem(category: Category) {
    return <CategoryGridTile title={category.title} color={category.color} />;
}

function CategoriesScreen() {
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={(itemData) => renderCategoryItem(itemData.item)} numColumns={2} />
    );
}
export default CategoriesScreen;
