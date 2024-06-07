import { Schema } from "mongoose";
import { RecipeInfo } from "../../@types/recipe.type";
import { Category, Level } from "../../@types/enums";

const recipeInfoSchema = new Schema<RecipeInfo>({
    amount: { type: Number, min: 1, required: true },
    time: { type: String, minlength: 2, maxlength: 256, required: true },
    level: { type: String, enum: Level, required: true },
    portions: { type: Number, minlength: 1, required: true },
    category: { type: String, enum: Category, required: true },
});
export default recipeInfoSchema