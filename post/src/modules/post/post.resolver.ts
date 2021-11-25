import { Args, Mutation, Parent, Query, ResolveField, Resolver, ResolveReference } from '@nestjs/graphql';
import { stringify } from 'querystring';
import { CreatePostInput } from './dto/create-person.input';
import { PostService } from './post.service';
import { Person } from './schemas/person.schema';
import { Post } from './schemas/post.schema';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => Post)
  async post(@Args('id') id: string) {
    return this.postService.findById(id);
  }

  @Query(() => [Post])
  async posts() {
    return this.postService.findAll();
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; _id: string }) {
    return this.postService.findById(reference._id);
  }

  @ResolveField((of) => Person, { name: 'person' })
  person(@Parent() post: Post) {
    return {__typename: 'Person', _id: post.authorId};
  }

  @Mutation(() => Post)
  async createPost(
    @Args('createPostInput') createJobFile: CreatePostInput,
  ) {
    return this.postService.create(createJobFile);
  }
}
