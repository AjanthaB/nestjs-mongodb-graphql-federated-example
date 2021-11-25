import { Document } from 'mongoose';
import { Person } from './person.schema';
export declare type PostDocument = Post & Document;
export declare class Post {
    _id: string;
    title: string;
    content: string;
    authorId: string;
    person: Person;
}
export declare const PostSchema: import("mongoose").Schema<Document<Post, any, any>, import("mongoose").Model<Document<Post, any, any>, any, any, any>, {}>;
