import { IJWTPayload } from "../@types/@types";
import User from "../db/models/user-model";
import { authService } from "./auth-service";
import { Request } from "express";
import { ILogin, IUser } from "../@types/user.type";
import pizzaError from "../errors/pizzaError";
import { Role } from "../@types/enums";


const userService = {
  createUser: async (data: IUser) => {
    const user = new User(data);
    //replace the password with it's hash
    const hash = await authService.hashPassword(user.password);
    user.password = hash;
    return await user.save();
  },

  uploadImage: async (userId: string, imagePath: string) => {
    const user = await User.findById(userId, { password: 0 });
    if (!user) throw new pizzaError(404, 'user not found');
    user.image = imagePath;
    await user.save()
    return user;
  },

  getAllUsers: async () => {
    const users = await User.find({}, { password: 0 });
    return users
  },

  loginUser: async ({ email, password }: ILogin) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new pizzaError(401, "Invalid email or password");
    }
    //check the pass:
    const isValid = await authService.comparePassword(password, user.password);
    if (!isValid) {
      throw new pizzaError(401, "Invalid email or password");
    }
    // payload {isAdmin ,isBusiness, _id}
    const payload: IJWTPayload = {
      _id: user._id.toString(),
      role: user.role
    };
    return authService.generateJWT(payload);
  },

  getUserById: async (id: string) => {
    const user = await User.findById({ _id: id }, { password: 0 })
    return user
  },

  updateUser: async (id: string, requestBody: IUser) => {
    const user = await User.findOneAndUpdate({ _id: id }, requestBody, { new: true, projection: { password: 0 } });
    if (!user) throw new pizzaError(404, 'user not found')
    return user
  },

  deleteUser: async (req: Request) => {
    const user = await User.findByIdAndDelete(req.params.id, { projection: { password: 0 } });
    if (!user) throw new pizzaError(404, 'user not found')
    return user
  },

  changeRole: async (role: Role, id: string) => {
    if (!role) throw new pizzaError(400, 'Role isnt provided')
    if (!id) throw new pizzaError(400, 'id isnt provided')
    const user = await User.findByIdAndUpdate(id, { role: role }, { projection: { password: 0 }, new: true })
    if (!user) throw new pizzaError(404, 'user not found');
    return user
  }
}

export default userService;
