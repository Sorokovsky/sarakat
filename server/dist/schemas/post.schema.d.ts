import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
export declare type PostDocument = Post & Document;
export declare class Post {
    title: string;
    text: string;
    image: string;
    author: User[];
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, any>, {}, {}, {}, {}, "type", Post>;
