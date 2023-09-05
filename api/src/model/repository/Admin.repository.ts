import Admin,{ AdminModel } from "../Admin.model";


class AdminRepositoryClass {
    constructor() {}

    public async addOne(data: AdminModel, pkeyValue: string) {
        const AdminExists = await Admin.findById(pkeyValue).exec();
        if (AdminExists) {
            throw new Error("Admin already exists", { cause: "DUPLICATE" });
        }
        data._id = pkeyValue;
        const admin = new Admin(data);
        return await admin.save();
    }

    public async getOne({ key, value }: { key: string; value: any }) {
        const admin = await Admin.findOne({ [key]: value }).exec();
        
        if (admin) {
            return admin;
        } else {
            throw new Error("Admin not found");
        }
    }

    public async getByPKey(pkeyValue: string) {
        const admin = await Admin.findById(pkeyValue).exec();
        if (admin) {
            return admin;
        }
        throw new Error("Admin not found");
    }

    public async getAll() {
        const admins = await Admin.find().exec();
        return admins;
    }

    public async updateOne(data: AdminModel, pkeyValue: string, ) {
        const admin = await Admin.findByIdAndUpdate(pkeyValue, data, { new: true }).exec();
        if (admin) {
            return admin;
        }
        throw new Error("Admin not found");
    }

    public async deleteOne(pkeyValue: string) {
        await Admin.findByIdAndDelete(pkeyValue).exec();
        return; 
    }
        
}

export const AdminRepository = new AdminRepositoryClass();
