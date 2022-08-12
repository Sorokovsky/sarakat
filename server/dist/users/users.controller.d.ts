import { HttpException } from "@nestjs/common";
import { ObjectId } from "mongoose";
import CreateUserDTO from "./dto/create-user.dto";
import GetUserDTO from "./dto/get-user.dto";
import UsersService from "./users.service";
export default class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAll(): Promise<GetUserDTO[] | HttpException>;
    getOne(id: ObjectId): Promise<GetUserDTO | HttpException>;
    delete(id: ObjectId): Promise<string | HttpException>;
    create(createDto: CreateUserDTO): Promise<GetUserDTO | HttpException>;
}
