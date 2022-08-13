import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Post, PostDocument } from "src/schemas/post.schema";
import { User, UserDocument } from "src/schemas/user.schema";
import CreatePostDto from "./dto/create-post.dto";
@Injectable()
export default class PostsService{
    constructor(@InjectModel(Post.name) private postModel:Model<PostDocument>,
                @InjectModel(User.name) private userModel:Model<UserDocument>){}
    async getAll():Promise<Post[] | HttpException>{
        try{
            const posts:Post[] = await this.postModel.find();
            return posts;
        }catch(e:unknown){
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }
    }
    async getOne(id:ObjectId):Promise<Post | HttpException>{
        try{
            let post:Post = await this.postModel.findById(id); 
            return post;
        }catch(e:unknown){
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }
    }
    async create(id:ObjectId, createDto:CreatePostDto):Promise<Post | HttpException>{
        try{
            const user = await this.userModel.findById(id);
            const post = await this.postModel.create(createDto);
            user.posts.push(post._id);
            post.author = user._id;
            await user.save();
            await post.save();
            return post;
        }catch(e:unknown){
            
            throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id:ObjectId):Promise<Post | HttpException>{
        try{
            const post = await this.postModel.findByIdAndDelete(id);
            return post;
        }catch(e:unknown){
            throw new HttpException("Not found", HttpStatus.NOT_FOUND);
        }
    }
}