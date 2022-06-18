import { Text, View } from "react-native";
import { MealItemProps } from "../types/Props";

function MealItem(props: MealItemProps) {
    return (
        <View>
            <Text>{props.title}</Text>
        </View>
    );
}

export default MealItem;
