import { Model } from 'mongoose';
import { CreatePostInput } from './dto/create-person.input';
import { Post, PostDocument } from './schemas/post.schema';
export declare class PostService {
    private postModel;
    constructor(postModel: Model<PostDocument>);
    create(createPersonInput: CreatePostInput): Promise<Post>;
    findAll(): import("mongoose").Query<(Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, PostDocument>;
    findById(postId: string): Promise<Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAllByAuthorId(authorId: string): Promise<(Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
