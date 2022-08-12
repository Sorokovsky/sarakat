import { HttpException } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { UserDocument } from "src/schemas/user.schema";
import CreateUserDTO from "./dto/create-user.dto";
import GetUserDTO from "./dto/get-user.dto";
export default class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getAll(): Promise<GetUserDTO[] | HttpException>;
    getOne(id: ObjectId): Promise<GetUserDTO | HttpException>;
    delete(id: ObjectId): Promise<string | HttpException>;
    create(createDto: CreateUserDTO): Promise<GetUserDTO | HttpException>;
}
