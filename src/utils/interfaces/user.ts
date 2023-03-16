import { Category } from "./category";

export interface IUser {
    name: string
    category: Array<Category>
    password: string
    email: string
}