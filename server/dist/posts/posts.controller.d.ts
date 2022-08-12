import { HttpException } from "@nestjs/common";
import { Post } from "src/schemas/post.schema";
import PostsService from "./posts.service";
export default class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getAll(): Promise<Post[] | HttpException>;
}
