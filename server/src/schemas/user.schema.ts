import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
}

export const UserSchema = SchemaFactory.createForClass(User);