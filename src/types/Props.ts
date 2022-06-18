import { NativeStackScreenProps } from "@react-navigation/native-stack";
type voidToVoid = () => void;

type NavigationStackParamList = {
    MealsOverview: {categoryID: string};
};
type navigationProps = NativeStackScreenProps<NavigationStackParamList, "MealsOverview">;

export type CategoryGridTileProps = {
    title: string;
    color: string;
    onPress: voidToVoid;
};

export type CategoriesScreenProps = {
    navigation: navigationProps["navigation"];
};

export type MealsOverviewScreenProps = {
    route: navigationProps["route"];
};

export type MealItemProps = {
    title: string
};
