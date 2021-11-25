import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from './post.schema';


@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "_id")')
export class Person {
  
  @Field(() => String)
  @Directive('@external')
  _id: string;

  @Field(() => [Post])
  posts: [Post]
}