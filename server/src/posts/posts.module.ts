import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "src/schemas/post.schema";
import { User, UserSchema } from "src/schemas/user.schema";
import PostsController from "./posts.controller";
import PostsService from "./posts.service";
@Module({
    controllers: [PostsController],
    providers: [PostsService],
    imports: [MongooseModule.forFeature([{name: Post.name, schema: PostSchema}, {name:User.name, schema: UserSchema}])]
})
export default class PostsModule{}