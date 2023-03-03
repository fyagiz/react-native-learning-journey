import { FlatList, ListRenderItemInfo } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummyData";
import Category from "../models/Category";

function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
}

function CategoriesScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />;
}

export default CategoriesScreen;
