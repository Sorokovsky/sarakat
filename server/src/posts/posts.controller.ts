import { Controller, Get, HttpException } from "@nestjs/common";
import { Post } from "src/schemas/post.schema";
import PostsService from "./posts.service";
@Controller("/posts")
export default class PostsController{
    constructor(private postsService:PostsService){}
    @Get()
    getAll():Promise<Post[] | HttpException>{
        return this.postsService.getAll();
    }
}