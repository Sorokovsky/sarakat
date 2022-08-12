import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Post, PostDocument } from "src/schemas/post.schema";
@Injectable()
export default class PostsService{
    constructor(@InjectModel(Post.name) private postModel:Model<PostDocument>){}
    async getAll():Promise<Post[] | HttpException>{
        try{
            const posts:Post[] = await this.postModel.find();
            return posts;
        }catch(e:unknown){
            throw new HttpException("Noy found", HttpStatus.NOT_FOUND);
        }
    }
}