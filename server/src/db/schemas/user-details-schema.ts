import { Schema } from "mongoose";
import { UserDetail } from "../../@types/recipe.type";

const userDetailSchema = new Schema<UserDetail>({
    image: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});
export default userDetailSchema