import { RequestHandler } from "express";
import User from "../db/models/user-model";

const updatedUser: RequestHandler = async (req, _, next) => {
    const userId = req.params.id;
    await User.findByIdAndUpdate(userId, { updatedAt: Date.now() }, { new: true })
    next()
}
export default updatedUser;