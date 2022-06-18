import { Pressable, Text, View } from "react-native";

function CategoryGridTile(props: CategoryGridTileProps){
    return(
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