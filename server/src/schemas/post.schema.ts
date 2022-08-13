import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type PostDocument = Post & Document;

@Schema()
export class Post {
    @Prop({required: true, unique: false})
    title: string;
    @Prop({required: false, unique: false})
    text: string;
    @Prop({required: false, unique: false})
    image: string;
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]})
    author: User[];
}

export const PostSchema = SchemaFactory.createForClass(Post);