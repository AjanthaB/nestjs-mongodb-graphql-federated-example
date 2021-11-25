import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type PersonDocument = Person & Document;

@Schema()
@ObjectType()
@Directive('@key(fields: "_id")')
export class Person {
  
  @Prop({ type: String, default: () => uuidv4() })
  @Field(() => String)
  _id: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field(() => Int)
  age: number;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
