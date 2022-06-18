import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type voidToVoid = () => void;

export type CategoryGridTileProps = {
    title: string;
    color: string;
    onPress: voidToVoid;
};

export type CategoriesScreenProps = {
    navigation: NativeStackNavigationProp<any, any>;
};
