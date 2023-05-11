import { Request, Response, NextFunction } from "express"
import { User } from "../model";
const getOne = async(req:Request, res:Response, next: NextFunction)=>{

}
const create = async(req:Request, res:Response, next: NextFunction)=>{
    const {email, password, fullName, dob} = req.body;
    User.
}
const update = async(req:Request, res:Response, next: NextFunction)=>{

}
const deleteOne = async(req:Request, res:Response, next: NextFunction)=>{

}
const getAll = async(req:Request, res:Response, next: NextFunction)=>{

}

export default {
    getOne,getAll,create, update, deleteOne
} as const;