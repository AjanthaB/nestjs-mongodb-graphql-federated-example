/// <reference types="mongoose" />
import { CreatePersonInput } from './dto/create-person.input';
import { PersonService } from './person.service';
import { Person } from './schemas/person.schema';
export declare class PersonResolver {
    private personService;
    constructor(personService: PersonService);
    person(id: string): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    peoples(): Promise<(Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    resolveReference(reference: {
        __typename: string;
        id: string;
    }): Promise<Person & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    createPerson(createJobFile: CreatePersonInput): Promise<Person>;
}
