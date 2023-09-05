import Deposit,{ DepositModel } from "../Deposit.model";


class DepositRepositoryClass {
    constructor() {}

    public async addOne(data: DepositModel, pkeyValue: string) {
        const depositExists = await Deposit.findById(pkeyValue).exec();
        if (depositExists) {
            throw new Error("Deposit already exists", { cause: "DUPLICATE" });
        }
        data._id = pkeyValue;
        const deposit = new Deposit(data);
        return await deposit.save();
    }

    public async getOne({ key, value }: { key: string; value: any }) {
        const deposit = await Deposit.findOne({ [key]: value }).exec();
        
        if (deposit) {
            return deposit;
        } else {
            throw new Error("Deposit not found");
        }
    }

    public async getByPKey(pkeyValue: string) {
        const deposit = await Deposit.findById(pkeyValue).exec();
        if (deposit) {
            return deposit;
        }
        throw new Error("Deposit not found");
    }

    public async getAll() {
        const deposits = await Deposit.find().exec();
        return deposits;
    }

    public async updateOne(data: DepositModel, pkeyValue: string, ) {
        const deposit = await Deposit.findByIdAndUpdate(pkeyValue, data, { new: true }).exec();
        if (deposit) {
            return deposit;
        }
        throw new Error("Deposit not found");
    }

    public async deleteOne(pkeyValue: string) {
        await Deposit.findByIdAndDelete(pkeyValue).exec();
        return; 
    }
        
}

export const DepositRepository = new DepositRepositoryClass();
