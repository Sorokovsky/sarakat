import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Post } from './post.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
    unique: true
  })
  email: string;
  @Prop({
    required: true,
    unique: false
  })
  name: string
  @Prop({
    required: true,
    unique: false
  })
  surname: string
  @Prop({
    required: true,
    unique: false
  })
  password: string
  @Prop({
    required: false,
    unique: false
  })
  avatar: string
  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}]})
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);