import { Controller, Get } from "@nestjs/common";
@Controller("/posts")
export default class PostsController{
    @Get()
    getAll(){
        return "Posts";
    }
}