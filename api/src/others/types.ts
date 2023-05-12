export interface IUser {
    id?: string;
    email: string;
    fullName: string;
    dob: string;
    role: "user" | "admin" | "premium", 
    password?:string
}

declare global {
    namespace Express {
      interface Request {
        user: {[key:string]:any};
      }
    }
  }