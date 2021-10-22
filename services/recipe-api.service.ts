const axios = require('axios');
require('dotenv').config();

export async function getRecipes(ingredient: string, amount: number)  {
    console.log(process.env.RECIPE_API_KEY);

        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.RECIPE_API_KEY}&ingredients=${ingredient}&number=${amount}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return error;
        }
    }