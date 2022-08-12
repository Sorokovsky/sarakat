import mongoose, { Document } from 'mongoose';
export declare type PostDocument = Post & Document;
export declare class Post {
    title: string;
    text: string;
    image: string;
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, any>, {}, {}, {}, {}, "type", Post>;
