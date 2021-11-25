import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Person } from './schemas/person.schema';
import { Post } from './schemas/post.schema';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private postService: PostService) {}

  @ResolveField(of => [Post])
  posts(@Parent() person: Person) {
    console.log(person);
    return this.postService.findAllByAuthorId(person._id);
  }
}
