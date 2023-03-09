import { FlatList, ListRenderItemInfo, StyleSheet, View } from "react-native";
import Meal from "../../models/Meal";
import MealItem from "./MealItem";

type MealsListProps = { items: Array<Meal> };

function MealsList(props: MealsListProps) {
  const { items } = props;

  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    const item = itemData.item;
    const { id, title, imageUrl, duration, complexity, affordability } = item;
    const mealItemProps = {
      id,
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
