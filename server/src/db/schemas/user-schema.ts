import { Schema } from "mongoose";
import { Role } from "../../@types/enums";
import { IUser } from "../../@types/user.type";
import nameSchema from "./name-schema";

const userSchema = new Schema<IUser>({
    name: { type: nameSchema, required: true },
    email: { type: String, maxlength: 30, required: true, unique: true },
    phone: { type: String, minlength: 9, maxlength: 13, required: true },
    password: { type: String, minlength: 7, maxlength: 300, required: true },
    image: { type: String, minlength: 2, maxlength: 256, default: '/profile/placeholder-profile.jpeg' },
    role: { type: Number, enum: Role, default: Role.USER },
    favorites: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
export default userSchema