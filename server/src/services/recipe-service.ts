import mongoose from "mongoose";
import { IRecipe } from "../@types/recipe.type";
import Recipe from "../db/models/recipe-model";
import pizzaError from "../errors/pizzaError";
import User from "../db/models/user-model";


const RecipeService = {

    createRecipe: async (data: IRecipe, userId: string) => {
        const user = await User.findById(userId);
        if (!user) throw new pizzaError(404, "user doesn't exists")
        const recipe = new Recipe(data);
        const { first, last } = user.name;
        const { image } = user
        recipe.user.firstName = first
        recipe.user.lastName = last
        recipe.userId = userId;
        recipe.user.image = image
        return await recipe.save();
    },

    checkIfUnique: async (data: IRecipe) => {
        const Recipes = await Recipe.find();
        const newRecipe = data;
        Recipes.forEach((r) => {
            if (r.title == newRecipe.title) {
                throw new pizzaError(409, 'card with the same title exists')
            }
        })
    },

    getAllRecipe: async () => {
        const recipes = await Recipe.find();
        return recipes
    },

    getRecipeById: async (data: string) => {
        if (!mongoose.Types.ObjectId.isValid(data)) {
            throw new pizzaError(400, 'Invalid mongoose id')
        };
        const recipe = await Recipe.findById(data);
        if (!recipe) throw new pizzaError(404, 'card not found')
        return recipe
    },

    getAllMyrecipes: async (id: string) => {
        const recipes = await Recipe.find({ userId: id });
        return recipes
    },

    updateRecipe: async (data: IRecipe, id: string) => {
        const update = await Recipe.findByIdAndUpdate(id, data, { new: true });
        return update
    },

    patchLike: async (cardId: string, userId: string) => {
        const user = await User.findById(userId);
        if (!user) throw new pizzaError(404, "ivalid token")
        const fav = user.favorites;
        const index = fav.indexOf(cardId);
        if (index !== -1) {
            fav.splice(index, 1);
        } else {
            fav.push(cardId);
        }
        await User.findByIdAndUpdate(userId, { favorites: fav }, { new: true })
        const { password, ...rest } = user.toJSON();
        return { ...rest }
    },


    deleteRecipe: async (id: string) => {
        return await Recipe.findByIdAndDelete(id)

    }
}

export default RecipeService