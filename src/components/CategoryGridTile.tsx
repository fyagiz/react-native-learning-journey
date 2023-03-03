import { Pressable, Text, View } from "react-native";
import { CategoryGridTileProps } from "../types/PropTypes";

function CategoryGridTile(props: CategoryGridTileProps) {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;
