import { HttpException } from "@nestjs/common";
import { ObjectId } from "mongoose";
import IUser from "src/utils/interfaces/User.interface";
import CreateUserDTO from "./dto/create-user.dto";
import UsersService from "./users.service";
export default class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAll(): Promise<IUser[] | HttpException>;
    getOne(id: ObjectId): Promise<IUser | HttpException>;
    delete(id: ObjectId): Promise<IUser | HttpException>;
    create(createDto: CreateUserDTO): Promise<IUser | HttpException>;
}
