import { Schema } from "mongoose";
import { IRecipe } from "../../@types/recipe.type";
import userDetailSchema from "./user-details-schema";
import recipeInfoSchema from "./recipe-info-schema";

const recipeSchema = new Schema<IRecipe>({
    image: { type: String, },
    title: { type: String, minlength: 2, maxlength: 256, required: true },
    description: { type: String, minlength: 2, maxlength: 1024, required: true },
    user: { type: userDetailSchema, default: {} },
    info: { type: recipeInfoSchema, required: true },
    ingredients: [{ type: String, minlength: 2, maxlength: 500, required: true }],
    method: { type: String, minlength: 2, maxlength: 1024, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    userId: { type: String, default: '' }
});
export default recipeSchema;