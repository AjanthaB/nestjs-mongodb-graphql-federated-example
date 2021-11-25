import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Person } from './person.schema';

export type PostDocument = Post & Document;

@Schema({
  toJSON: {virtuals: true}
})
@ObjectType()
@Directive('@key(fields: "_id")')
export class Post {
  
  @Prop({ type: String, default: () => uuidv4() })
  @Field(() => String)
  _id: string;

  @Prop()
  @Field(() => String)
  title: string;

  @Prop()
  @Field(() => String)
  content: string;

  @Prop()
  @Field(() => String)
  authorId: string;

  @Field(() => Person)
  person: Person;
}

export const PostSchema = SchemaFactory.createForClass(Post);
