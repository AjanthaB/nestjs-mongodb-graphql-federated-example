import { CreatePostInput } from './dto/create-person.input';
import { PostService } from './post.service';
import { Post } from './schemas/post.schema';
export declare class PostResolver {
    private postService;
    constructor(postService: PostService);
    post(id: string): Promise<Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    posts(): Promise<(Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    resolveReference(reference: {
        __typename: string;
        _id: string;
    }): Promise<Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    person(post: Post): {
        __typename: string;
        _id: string;
    };
    createPost(createJobFile: CreatePostInput): Promise<Post>;
}
