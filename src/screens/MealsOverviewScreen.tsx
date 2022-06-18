import { View, StyleSheet, FlatList, Text } from "react-native";
import { MealsOverviewScreenProps } from "../types/Props";

import { MEALS } from "../data/dummyData";
import MealItem from "../components/mealItem";
import Meal from "../models/Meal";

function MealsOverviewScreen(props: MealsOverviewScreenProps) {
    const categoryID = props.route.params.categoryID;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIDs.indexOf(categoryID) >= 0;
    });

    function renderMealItem(item: Meal) {
        return <MealItem title={item.title} />;
    }
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.ID} renderItem={(itemData) => renderMealItem(itemData.item)} />
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
