export interface Recipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
    likes: number;
    missedIngredientCount: number;
    missedIngredients: unknown[];
    usedIngredientCount: number;
    usedIngredients: unknown[];
    unusedIngredients: unknown[];
}