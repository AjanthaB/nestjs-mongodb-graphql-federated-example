import { PostService } from './post.service';
import { Person } from './schemas/person.schema';
import { Post } from './schemas/post.schema';
export declare class PersonResolver {
    private postService;
    constructor(postService: PostService);
    posts(person: Person): Promise<(Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
