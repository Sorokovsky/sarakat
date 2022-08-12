import { HttpException } from "@nestjs/common";
import { ObjectId } from "mongoose";
export default class UsersController {
    getAll(): string | HttpException;
    getOne(id: ObjectId): string | HttpException;
    delete(id: ObjectId): string | HttpException;
}
