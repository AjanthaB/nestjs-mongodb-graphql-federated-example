import { Model } from 'mongoose';
import { CreatePersonInput } from './dto/create-person.input';
import { Person, PersonDocument } from './schemas/person.schema';
export declare class PersonService {
    private personModel;
    constructor(personModel: Model<PersonDocument>);
    create(createPersonInput: CreatePersonInput): Promise<Person>;
    findAll(): import("mongoose").Query<(Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, PersonDocument>;
    findById(personId: string): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
