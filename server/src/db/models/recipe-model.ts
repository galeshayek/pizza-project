import { model } from "mongoose";
import recipeSchema from "../schemas/recipe-schema";

const Recipe = model('Recipe', recipeSchema)
export default Recipe