import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from "dotenv";
import UsersModule from "src/users/users.module";
dotenv.config();
@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot(process.env.DB_URI)
    ]
})
export default class AppModule{}