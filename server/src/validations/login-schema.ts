import Joi from "joi";
import { passwordRegex } from "./patterns";
import { ILogin } from "../@types/user.type";
const loginSchema = Joi.object<ILogin>({
  email: Joi.string().email().min(5).max(30).required(),
  password: Joi.string().pattern(passwordRegex).required()
});

export default loginSchema;