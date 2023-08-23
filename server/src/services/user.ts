import { User } from "../models/User";

class UserService {
    async getAll(params: { name?: string; email?: string }) {
        return await User.find(params);
    }
    async getByEmail(userEmail: string) {
        return await User.findOne({ email: userEmail });
    }
    async create(name: string, email: string, password: string) {
        const user = new User({
            name,
            email,
            password,
        });
        await user.save();
        return user;
    }
}

export const userService = new UserService();
