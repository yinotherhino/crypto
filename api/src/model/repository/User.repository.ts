import User,{ UserModel } from "../User.model";


class UserRepositoryClass {
    constructor() {}

    public async addOne(data: UserModel, pkeyValue: string) {
        const userExists = await User.findById(pkeyValue).exec();
        if (userExists) {
            throw new Error("User already exists", { cause: "DUPLICATE" });
        }
        data._id = pkeyValue;
        const user = new User(data);
        return await user.save();
    }

    public async getOne({ key, value }: { key: string; value: any }) {
        const user = await User.findOne({ [key]: value }).exec();
        
        if (user) {
            return user;
        } else {
            throw new Error("User not found", {cause: "NOT_FOUND"});
        }
    }

    public async getByPKey(pkeyValue: string) {
        const user = await User.findById(pkeyValue).exec();
        if (user) {
            return user;
        }
        throw new Error("User not found", { cause: "NOT_FOUND" });
    }

    public async getAll() {
        const users = await User.find().exec();
        return users;
    }

    public async updateOne(data: UserModel, pkeyValue: string, ) {
        const user = await User.findByIdAndUpdate(pkeyValue, data, { new: true }).exec();
        if (user) {
            return user;
        }
        throw new Error("User not found", { cause: "NOT_FOUND" });
    }

    public async deleteOne(pkeyValue: string) {
        await User.findByIdAndDelete(pkeyValue).exec();
        return; 
    }
        
}

export const UserRepository = new UserRepositoryClass();
