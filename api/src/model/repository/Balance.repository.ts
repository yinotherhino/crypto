import Balance,{ BalanceModel } from "../Balance.model";


class BalanceRepositoryClass {
    constructor() {}

    public async addOne(data: BalanceModel, pkeyValue: string) {
        const BalanceExists = await Balance.findById(pkeyValue).exec();
        if (BalanceExists) {
            throw new Error("Balance already exists", { cause: "DUPLICATE" });
        }
        data._id = pkeyValue;
        const balance = new Balance(data);
        return await balance.save();
    }

    public async getOne({ key, value }: { key: string; value: any }) {
        const balance = await Balance.findOne({ [key]: value }).exec();
        
        if (balance) {
            return balance;
        } else {
            throw new Error("Balance not found");
        }
    }

    public async getByPKey(pkeyValue: string) {
        const balance = await Balance.findById(pkeyValue).exec();
        if (balance) {
            return balance;
        }
        throw new Error("Balance not found");
    }

    public async getAll() {
        const balances = await Balance.find().exec();
        return balances;
    }

    public async updateOne(data: BalanceModel, pkeyValue: string, ) {
        const balance = await Balance.findByIdAndUpdate(pkeyValue, data, { new: true }).exec();
        if (balance) {
            return balance;
        }
        throw new Error("Balance not found");
    }

    public async deleteOne(pkeyValue: string) {
        await Balance.findByIdAndDelete(pkeyValue).exec();
        return; 
    }
        
}

export const BalanceRepository = new BalanceRepositoryClass();
