import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
    @Prop({required: true, unique: false})
    title: string;
    @Prop({required: true, unique: false})
    text: string;
    @Prop({required: false, unique: false})
    image: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);