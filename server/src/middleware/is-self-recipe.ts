import { RequestHandler } from "express";
import Recipe from "../db/models/recipe-model";
import pizzaError from "../errors/pizzaError";
import { validateToken } from "./validate-token";

const _isSelfRecipe: RequestHandler = async (req, _, next) => {
    const userId = req.payload._id;
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return next(new pizzaError(404, 'recipe not found'))
    const recipeUserId = recipe.userId
    if (userId !== recipeUserId) return next(new pizzaError(403, 'only the user who created the card can alter it'));
    next()
}
export const isSelfRecipe = [validateToken, _isSelfRecipe];