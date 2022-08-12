import { NestApplication, NestFactory } from "@nestjs/core";
import * as dotenv from "dotenv";
import AppModule from "./app/app.module";
dotenv.config();
const PORT = +process.env.PORT || 3000;
const start = async (port:number):Promise<void> => {
    const app:NestApplication = await NestFactory.create(AppModule);
    app.listen(port);
    console.log("Server has been started on port: " + port);
    
}
start(PORT);