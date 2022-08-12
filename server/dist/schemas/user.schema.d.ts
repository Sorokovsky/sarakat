import mongoose, { Document } from 'mongoose';
import { Post } from './post.schema';
export declare type UserDocument = User & Document;
export declare class User {
    email: string;
    name: string;
    surname: string;
    password: string;
    avatar: string;
    posts: Post[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;
