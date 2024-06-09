import { Logger } from "../logs/logger";
import User from "./models/user-model";
import { users, recipe } from "./initial-data"
import { authService } from "../services/auth-service";
import Recipe from "./models/recipe-model";

const initDB = async () => {
    try {
        const usersCount = await User.countDocuments();
        if (usersCount === 0) {
            for (let u of users) {
                u.password = await authService.hashPassword(u.password);
                const user = new User(u);
                await user.save();
                const res = await User.find({}, { password: 0 })
                Logger.verbose(res);
            };
        }
        const recipeCount = await Recipe.countDocuments();
        if (recipeCount === 0) {
            for (let c of recipe) {
                const card = new Recipe(c);
                const saved = await card.save();
                Logger.verbose(saved);
            }
        }
    } catch (e) {
        Logger.error(e);
    }
};

export default initDB;
