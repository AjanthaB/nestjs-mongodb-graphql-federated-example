import { CreatePersonInput } from './create-person.input';
declare const UpdatePersonInput_base: import("@nestjs/common").Type<Partial<CreatePersonInput>>;
export declare class UpdatePersonInput extends UpdatePersonInput_base {
    age: number;
}
export {};
