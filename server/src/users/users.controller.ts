import { Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param } from "@nestjs/common";
import { ObjectId } from "mongoose";

@Controller('/users')
export default class UsersController{
    @Get()
    getAll():string | HttpException{
        return "users";
    }
    @Get(":id")
    getOne(@Param('id') id:ObjectId):string | HttpException{
        return `${id}`;
    }
    @Delete(":id")
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id:ObjectId):string | HttpException{
        return `Deleted ${id}`;
    }
}