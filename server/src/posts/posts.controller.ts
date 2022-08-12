import { Controller, Get, HttpException, Param } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { Post } from "src/schemas/post.schema";
import PostsService from "./posts.service";
@Controller("/posts")
export default class PostsController{
    constructor(private postsService:PostsService){}
    @Get()
    getAll():Promise<Post[] | HttpException>{
        return this.postsService.getAll();
    }
    @Get(":id")
    getOne(@Param('id') id:ObjectId):Promise<Post | HttpException>{
        return this.postsService.getOne(id);
    }
}