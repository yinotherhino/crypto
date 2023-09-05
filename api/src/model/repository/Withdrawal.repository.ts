import Withdrawal,{ WithdrawalModel } from "../Withdrawal.model";


class WithdrawalRepositoryClass {
    constructor() {}

    public async addOne(data: WithdrawalModel, pkeyValue: string) {
        const withdrawalExists = await Withdrawal.findById(pkeyValue).exec();
        if (withdrawalExists) {
            throw new Error("Withdrawal already exists", { cause: "DUPLICATE" });
        }
        data._id = pkeyValue;
        const withdrawal = new Withdrawal(data);
        return await withdrawal.save();
    }

    public async getOne({ key, value }: { key: string; value: any }) {
        const withdrawal = await Withdrawal.findOne({ [key]: value }).exec();
        
        if (withdrawal) {
            return withdrawal;
        } else {
            throw new Error("Withdrawal not found");
        }
    }

    public async getByPKey(pkeyValue: string) {
        const withdrawal = await Withdrawal.findById(pkeyValue).exec();
        if (withdrawal) {
            return withdrawal;
        }
        throw new Error("Withdrawal not found");
    }

    public async getAll() {
        const withdrawals = await Withdrawal.find().exec();
        return withdrawals;
    }

    public async updateOne(data: WithdrawalModel, pkeyValue: string, ) {
        const withdrawal = await Withdrawal.findByIdAndUpdate(pkeyValue, data, { new: true }).exec();
        if (withdrawal) {
            return withdrawal;
        }
        throw new Error("Withdrawal not found");
    }

    public async deleteOne(pkeyValue: string) {
        await Withdrawal.findByIdAndDelete(pkeyValue).exec();
        return; 
    }
        
}

export const WithdrawalRepository = new WithdrawalRepositoryClass();
