import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonInput } from './dto/create-person.input';
import { UpdatePersonInput } from './dto/update-person.input';
import { Person, PersonDocument } from './schemas/person.schema';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}

  create(createPersonInput: CreatePersonInput): Promise<Person> {
    const person = new this.personModel(createPersonInput);
    return this.personModel.create(person);
  }

  findAll() {
    return this.personModel.find();
  }

  async findById(personId: string) {
    return this.personModel.findById(personId);
  }
}
