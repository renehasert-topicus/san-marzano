import { Recipe } from "../models/recipe.model";
const axios = require('axios');

export async function getRecipes(): Promise<any>  {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.RECIPE_API_KEY}&ingredients=tomatoes&number=5`);
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }