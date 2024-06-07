import mongoose from "mongoose"
import pizzaError from "../errors/pizzaError"
import { RequestHandler } from "express"
import Recipe from "../db/models/recipe-model"

const validateId: RequestHandler = async (req, _, next) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new pizzaError(400, 'Invalid mongoose id')
        };
        const recipe = await Recipe.findById(id);
        if (!recipe) throw new pizzaError(404, 'recipe not found');
        next()
    } catch (e) {
        next(e)
    }
}

export default validateId