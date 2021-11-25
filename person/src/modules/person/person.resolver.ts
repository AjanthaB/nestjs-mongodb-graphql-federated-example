import { Args, Mutation, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { CreatePersonInput } from './dto/create-person.input';
import { PersonService } from './person.service';
import { Person } from './schemas/person.schema';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query(() => Person)
  async person(@Args('id') id: string) {
    return this.personService.findById(id);
  }

  @Query(() => [Person])
  async peoples() {
    return this.personService.findAll();
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; _id: string }) {
    return this.personService.findById(reference._id);
  }

  @Mutation(() => Person)
  async createPerson(
    @Args('createPersonInput') createJobFile: CreatePersonInput,
  ) {
    return this.personService.create(createJobFile);
  }
}
