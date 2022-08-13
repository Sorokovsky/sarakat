import { Controller, Get, Post ,HttpException, Param, Body } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { Post as IPost } from "src/schemas/post.schema";
import CreatePostDto from "./dto/create-post.dto";
import PostsService from "./posts.service";
@Controller("/posts")
export default class PostsController{
    constructor(private postsService:PostsService){}
    @Get()
    getAll():Promise<IPost[] | HttpException>{
        return this.postsService.getAll();
    }
    @Get(":id")
    getOne(@Param('id') id:ObjectId):Promise<IPost | HttpException>{
        return this.postsService.getOne(id);
    }
    @Post(':id')
    create(@Param('id') id:ObjectId, @Body() body:CreatePostDto):Promise<IPost | HttpException>{
        return this.postsService.create(id, body);
    }
}