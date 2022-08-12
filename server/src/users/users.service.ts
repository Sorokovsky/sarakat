import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { hash } from 'bcrypt';
import { User, UserDocument } from "src/schemas/user.schema";
import IUser from "src/utils/interfaces/User.interface";
import CreateUserDTO from "./dto/create-user.dto";
@Injectable()
export default class UsersService {
    constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){}
    async getAll():Promise<IUser[] | HttpException>{
        try{
            const users:IUser[] = await this.userModel.find();
            return users;
        }catch (e:unknown){
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
        }
    }
    async getOne(id:ObjectId):Promise<IUser | HttpException>{
        try{
            const user:IUser = await this.userModel.findById(id);
            return user;
        }catch(error:unknown){
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
        }
    }
    async delete(id:ObjectId):Promise<IUser | HttpException>{
        try{
            const deletedUser = await this.userModel.findById(id);
            await deletedUser.delete();
            return deletedUser;
        }catch(error:unknown){
            throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
        }
    }
    async create(createDto:CreateUserDTO):Promise<IUser | HttpException>{
        try{
            const hashedPassword:string = await hash(createDto.password, 4);
            const user:IUser = await this.userModel.create({...createDto, password: hashedPassword});
            return user;
        }catch(e:unknown){
            throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
        }
    }
}