const axios = require('axios');
require('dotenv').config();

export async function getRecipes(ingredient: string = 'tomatoes', amount: number = 5)  {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.recipeApiKey}&ingredients=${ingredient}&number=${amount}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }