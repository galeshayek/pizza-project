import { Role } from "./enums";

export type UserName = {
    first: string;
    last: string;
};
export type IUser = & {
    _id?: string,
    image: string,
    name: UserName;
    email: string;
    phone: string;
    password: string;
    role: Role;
    favorites: string[];
    createdAt: Date;
    updatedAt: Date;
};

export type ILogin = {
    email: string,
    password: string,
}

