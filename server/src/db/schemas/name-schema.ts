import { Schema } from "mongoose";
import { UserName } from "../../@types/user.type";

const NameSchema = new Schema<UserName>({
  first: { type: String, minlength: 2, maxlength: 50, required: true },
  last: { type: String, minlength: 2, maxlength: 50, required: true },
});
export default NameSchema