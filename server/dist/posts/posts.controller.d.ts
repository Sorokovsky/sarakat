import { HttpException } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { Post } from "src/schemas/post.schema";
import PostsService from "./posts.service";
export default class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getAll(): Promise<Post[] | HttpException>;
    getOne(id: ObjectId): Promise<Post | HttpException>;
}
