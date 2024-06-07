import { RequestHandler } from "express";
import Recipe from "../db/models/recipe-model";

const updatedRecipe: RequestHandler = async (req, _, next) => {
    const recipeId = req.params.id;
    await Recipe.findByIdAndUpdate(recipeId, { updatedAt: Date.now() }, { new: true })
    next()
}
export default updatedRecipe;