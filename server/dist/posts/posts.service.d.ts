import { HttpException } from "@nestjs/common";
import { Model, ObjectId } from "mongoose";
import { Post, PostDocument } from "src/schemas/post.schema";
export default class PostsService {
    private postModel;
    constructor(postModel: Model<PostDocument>);
    getAll(): Promise<Post[] | HttpException>;
    getOne(id: ObjectId): Promise<Post | HttpException>;
}
