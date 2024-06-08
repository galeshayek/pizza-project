import Joi, { object } from "joi";
import { passwordRegex, phoneRegex } from "./patterns";
import { IUser, UserName } from "../@types/user.type";
import { Role } from "../@types/enums";

const userNameSchema = Joi.object<UserName>({
  first: Joi.string().min(2).max(10).required(),
  last: Joi.string().min(2).max(10).required(),
});

const userSchema = Joi.object<IUser>({
  name: userNameSchema.required(),
  email: Joi.string().email().max(50).required(),
  phone: Joi.string().pattern(phoneRegex).required(),
  password: Joi.string().pattern(passwordRegex).required(),
  image: Joi.string().min(2).max(256),
  role: Joi.string().valid(...Object.values(Role)).default(Role.USER),
  favorites: Joi.array().items(Joi.string()).default([]),
  createdAt: Joi.date().default(Date.now),
  updatedAt: Joi.date().default(Date.now),
});

const updateUserSchema = Joi.object({
  name: Joi.object<UserName>({
    first: Joi.string().min(2).max(10).required(),
    last: Joi.string().min(2).max(10).required(),
  }).required(),
  phone: Joi.string().pattern(phoneRegex).required(),

});

const RoleSchema = Joi.object({
  set: Joi.number().valid(...Object.values(Role))
})
export default userSchema;
export { updateUserSchema, RoleSchema }