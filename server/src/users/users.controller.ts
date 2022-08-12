import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { ObjectId } from "mongoose";
import IUser from "src/utils/interfaces/User.interface";
import CreateUserDTO from "./dto/create-user.dto";
import GetUserDTO from "./dto/get-user.dto";
import UsersService from "./users.service";
@Controller('/users')
export default class UsersController{
    constructor(private userService:UsersService){}
    @Get()
    getAll():Promise<GetUserDTO[] | HttpException>{
        return this.userService.getAll();
    }
    @Get(":id")
    getOne(@Param('id') id:ObjectId):Promise<GetUserDTO | HttpException>{
        return this.userService.getOne(id);
    }
    @Delete(":id")
    delete(@Param('id') id:ObjectId):Promise<string | HttpException>{
        return this.userService.delete(id);
    }
    @Post()
    create(@Body() createDto: CreateUserDTO):Promise<GetUserDTO | HttpException>{
        return this.userService.create(createDto);
    }
}