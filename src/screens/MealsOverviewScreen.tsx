import { FlatList, View, StyleSheet, ListRenderItemInfo, Text } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { MEALS } from "../data/dummyData";
import Meal from "../models/Meal";
import MealItem from "../components/MealItem";

type mealsOverviewScreenPropsType = NativeStackNavigationProp<RootStackParamList, "MealsOverview">;

function MealsOverviewScreen() {
    const navigation = useNavigation<mealsOverviewScreenPropsType>();
    const route = useRoute<RouteProp<RootStackParamList, "MealsOverview">>();

    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
        const item = itemData.item;
        const { title, imageUrl, duration, complexity, affordability } = item;
        const mealItemProps = { title, imageUrl, duration, complexity, affordability };
        return <MealItem {...mealItemProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
