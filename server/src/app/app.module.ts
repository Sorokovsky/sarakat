import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from "dotenv";
import PostsModule from "src/posts/posts.module";
import UsersModule from "src/users/users.module";
dotenv.config();
@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot(process.env.DB_URI),
        PostsModule
    ]
})
export default class AppModule{}