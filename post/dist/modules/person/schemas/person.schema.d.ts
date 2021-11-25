import { Document } from 'mongoose';
export declare type PersonDocument = Person & Document;
export declare class Person {
    _id: string;
    name: string;
    age: number;
}
export declare const PersonSchema: import("mongoose").Schema<Document<Person, any, any>, import("mongoose").Model<Document<Person, any, any>, any, any, any>, {}>;
