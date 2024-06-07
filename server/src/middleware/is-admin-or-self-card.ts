import { RequestHandler } from "express";
import pizzaError from "../errors/pizzaError";
import { validateToken } from "./validate-token";
import Recipe from "../db/models/recipe-model";
import { Role } from "../@types/enums";

const _isAdminOrSelf: RequestHandler = async (req, _, next) => {
    const requestedId = req.params.id;
    const userId = req.payload._id;
    const recipe = await Recipe.findById(requestedId);
    if (!recipe) return next(new pizzaError(404, "recipe doesn't exist"))
    const cardOwner = recipe;
    if (cardOwner.userId === userId || req.payload?.role == Role.ADMIN) {
        return next();
    }

    next(new pizzaError(403, "Must be the requested user or admin"));
};

export const isRecipeOwnerOrAdmin = [validateToken, _isAdminOrSelf];