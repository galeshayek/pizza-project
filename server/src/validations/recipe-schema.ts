import Joi from 'joi';
import { Category, Level } from '../@types/enums';

const userDetailSchema = Joi.object({
    image: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    id: Joi.string().required(),
});

const recipeInfoSchema = Joi.object({
    amount: Joi.number().min(1).required(),
    time: Joi.string().min(2).max(256).required(),
    level: Joi.string().valid(...Object.values(Level)).required(),
    portions: Joi.number().min(1).max(10).required(),
    category: Joi.string().valid(...Object.values(Category)).required(),
});

export const recipeSchema = Joi.object({
    image: Joi.string(),
    title: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    info: recipeInfoSchema.required(),
    ingredients: Joi.array().items(Joi.string().min(2).max(500).required()).required(),
    method: Joi.string().min(2).max(1024).required(),
    createdAt: Joi.date().default(Date.now),
    updatedAt: Joi.date().default(Date.now),
});

export const UpdateRecipeSchema = Joi.object({
    image: Joi.string(),
    title: Joi.string().min(2).max(256).required(),
    description: Joi.string().min(2).max(1024).required(),
    info: recipeInfoSchema.required(),
    ingredients: Joi.array().items(Joi.string().min(2).max(500).required()).required(),
    method: Joi.string().min(2).max(1024).required(),
    updatedAt: Joi.date().default(Date.now),
});