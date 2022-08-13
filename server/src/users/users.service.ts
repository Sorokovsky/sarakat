import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { hash } from 'bcrypt';
import { User, UserDocument } from "src/schemas/user.schema";
import CreateUserDTO from "./dto/create-user.dto";
import GetUserDTO from "./dto/get-user.dto";
@Injectable()
export default class UsersService {
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}
    async getAll():Promise<GetUserDTO[] | HttpException>{
        try{
            const users:GetUserDTO[] = await this.userModel.find();
            return users;
        }catch (e:unknown){
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
        }
    }
    async getOne(id:ObjectId):Promise<GetUserDTO | HttpException>{
        try{
            const user:GetUserDTO = await this.userModel.findById(id).populate("posts");
            return user;
        }catch(error:unknown){
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
        }
    }
    async delete(id:ObjectId):Promise<string | HttpException>{
        try{
            await this.userModel.findByIdAndDelete(id);
            return `${id}`;
        }catch(error:unknown){
            throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
        }
    }
    async create(createDto:CreateUserDTO):Promise<GetUserDTO | HttpException>{
        try{
            const hashedPassword:string = await hash(createDto.password, 4);
            const user:GetUserDTO = await this.userModel.create({...createDto, password: hashedPassword});
            return user;
        }catch(e:unknown){
            throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
        }
    }
}