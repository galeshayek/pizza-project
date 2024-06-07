import { Document } from 'mongoose';
import { Level, Category } from './enums';

export type UserDetail = {
    image: string;
    firstName: string;
    lastName: string;
};

export type RecipeInfo = {
    amount: number;
    time: string;
    level: Level;
    portions: number;
    category: Category;
};

export type IRecipe = Document & {
    image: string;
    title: string;
    description: string;
    user: UserDetail;
    info: RecipeInfo;
    ingredients: string[];
    method: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
};
