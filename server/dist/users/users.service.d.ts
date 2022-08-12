import { HttpException } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { UserDocument } from "src/schemas/user.schema";
import IUser from "src/utils/interfaces/User.interface";
import CreateUserDTO from "./dto/create-user.dto";
export default class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getAll(): Promise<IUser[] | HttpException>;
    getOne(id: ObjectId): Promise<IUser | HttpException>;
    delete(id: ObjectId): Promise<IUser | HttpException>;
    create(createDto: CreateUserDTO): Promise<IUser | HttpException>;
}
