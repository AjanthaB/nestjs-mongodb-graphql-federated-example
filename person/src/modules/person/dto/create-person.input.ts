import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonInput {
  @Field()
  name: string;
  @Field(() => Int!)
  age: number;
}
