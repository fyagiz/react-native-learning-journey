class Meal {
    ID: string;
    categoryIDs: Array<string>;
    title: string;
    affordability: string;
    complexity: string;
    imageUrl: string;
    duration: number;
    ingredients: Array<string>;
    steps: Array<string>;
    isGlutenFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;

    constructor(
        ID: string,
        categoryIDs: Array<string>,
        title: string,
        affordability: string,
        complexity: string,
        imageUrl: string,
        duration: number,
        ingredients: Array<string>,
        steps: Array<string>,
        isGlutenFree: boolean,
        isVegan: boolean,
        isVegetarian: boolean,
        isLactoseFree: boolean
    ) {
        this.ID = ID;
        this.categoryIDs = categoryIDs;
        this.title = title;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.steps = steps;
        this.duration = duration;
        this.complexity = complexity;
        this.affordability = affordability;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}

export default Meal;
