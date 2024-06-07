import loginSchema from "../../validations/login-schema";
import { UpdateRecipeSchema, recipeSchema } from "../../validations/recipe-schema";
import userSchema, { updateUserSchema } from "../../validations/user-schema";
import { validateSchema } from "./validate-schema";

const validateUser = validateSchema(userSchema);
const validateLogin = validateSchema(loginSchema);
const vaildateRecipe = validateSchema(recipeSchema);
const vaildateUpdateRecipe = validateSchema(UpdateRecipeSchema);
const validateUpdate = validateSchema(updateUserSchema);

export { validateUser, validateLogin, vaildateRecipe, validateUpdate, vaildateUpdateRecipe, };
