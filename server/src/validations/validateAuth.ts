import { RequestHandler } from "express";
import pizzaError from "../errors/pizzaError";
import Recipe from "../db/models/recipe-model";
import { Role } from "../@types/enums";

const validateAuth: RequestHandler = async (req, _, next) => {
    try {
        const { _id, role } = req.payload;
        const id = req.params.id;
        const recipe = await Recipe.findById(id);
        if (recipe.userId !== _id && role >= Role.ADMIN) throw new pizzaError(401, 'unauthorized to modify this card')
        next()
    } catch (e) {
        next(e)
    }
}

export default validateAuth