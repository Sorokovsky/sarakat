import { HttpException } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { Post as IPost } from "src/schemas/post.schema";
import CreatePostDto from "./dto/create-post.dto";
import PostsService from "./posts.service";
export default class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getAll(): Promise<IPost[] | HttpException>;
    getOne(id: ObjectId): Promise<IPost | HttpException>;
    create(id: ObjectId, body: CreatePostDto): Promise<IPost | HttpException>;
    delete(id: ObjectId): Promise<IPost | HttpException>;
}
