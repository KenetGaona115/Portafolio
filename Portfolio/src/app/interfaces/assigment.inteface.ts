import { User } from "./user.interface";

export interface Class {
    name?: string,
    proffesor?: User
    students?: User[],
}