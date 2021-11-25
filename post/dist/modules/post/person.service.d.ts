import { Model } from 'mongoose';
import { CreatePostInput } from './dto/create-person.input';
import { Post, PostDocument } from './schemas/post.schema';
export declare class PostService {
    private personModel;
    constructor(personModel: Model<PostDocument>);
    create(createPersonInput: CreatePostInput): Promise<Post>;
    findAll(): import("mongoose").Query<(Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, PostDocument>;
    findById(personId: string): Promise<Post & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
