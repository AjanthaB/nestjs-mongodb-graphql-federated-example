import { CreatePostInput } from './create-person.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePersonInput extends PartialType(CreatePostInput) {
  @Field(() => Int)
  age: number;
}
