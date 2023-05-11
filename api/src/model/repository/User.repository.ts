import { IUser } from "../../others/types";

export class UserRepository {
  constructor() {}
  public async getOne(): Promise<IUser> {
    return {
      id: "1234",
      email: "",
      fullName: "node king",
      dob: "22/02/1897",
      role: "user",
    };
  }
  public async getById(id: string):Promise<IUser> {
    return {
      id: "1234",
      email: "",
      fullName: "node king",
      dob: "22/02/1897",
      role: "user",
    };
  }
  public async addOne(): Promise<IUser> {
    return {
      id: "1234",
      email: "",
      fullName: "node king",
      dob: "22/02/1897",
      role: "user",
    };
  }
  public async deleteOne() {
    return;
  }
  public async getAll() {
    return [
      {
        id: "1234",
        email: "",
        fullName: "node king",
        dob: "22/02/1897",
        role: "user",
      },
      {
        id: "1235",
        email: "",
        fullName: "node king",
        dob: "22/02/1897",
        role: "user",
      },
    ];
  }
  public async updateOne(updateDetails: IUser): Promise<IUser> {
    return {
      id: "1235",
      email: "",
      fullName: updateDetails.fullName || "node king",
      dob: updateDetails.dob || "22/02/1897",
      role: "user",
    };
  }
}
