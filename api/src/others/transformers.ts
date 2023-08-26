import { UserModel } from "../model/User.model";

const toUserObject = (user:UserModel) =>{
    return {
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
        phone: user.phone,
        email: user.email,
        gender: user.gender,
        role: user.role,
        verified: user.verified,
    }
}

export default {toUserObject} as const;