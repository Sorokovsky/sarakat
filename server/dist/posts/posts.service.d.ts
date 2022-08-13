import { HttpException } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { Post, PostDocument } from "src/schemas/post.schema";
import { UserDocument } from "src/schemas/user.schema";
import CreatePostDto from "./dto/create-post.dto";
export default class PostsService {
    private postModel;
    private userModel;
    constructor(postModel: Model<PostDocument>, userModel: Model<UserDocument>);
    getAll(): Promise<Post[] | HttpException>;
    getOne(id: ObjectId): Promise<Post | HttpException>;
    create(id: ObjectId, createDto: CreatePostDto): Promise<Post | HttpException>;
    delete(id: ObjectId): Promise<Post | HttpException>;
}
