"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_person_input_1 = require("./dto/create-person.input");
const person_service_1 = require("./person.service");
const person_schema_1 = require("./schemas/person.schema");
let PersonResolver = class PersonResolver {
    constructor(personService) {
        this.personService = personService;
    }
    async person(id) {
        return this.personService.findById(id);
    }
    async peoples() {
        return this.personService.findAll();
    }
    resolveReference(reference) {
        return this.personService.findById(reference.id);
    }
    async createPerson(createJobFile) {
        return this.personService.create(createJobFile);
    }
};
__decorate([
    (0, graphql_1.Query)(() => person_schema_1.Person),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "person", null);
__decorate([
    (0, graphql_1.Query)(() => [person_schema_1.Person]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "peoples", null);
__decorate([
    (0, graphql_1.ResolveReference)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PersonResolver.prototype, "resolveReference", null);
__decorate([
    (0, graphql_1.Mutation)(() => person_schema_1.Person),
    __param(0, (0, graphql_1.Args)('createPersonInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_input_1.CreatePersonInput]),
    __metadata("design:returntype", Promise)
], PersonResolver.prototype, "createPerson", null);
PersonResolver = __decorate([
    (0, graphql_1.Resolver)(() => person_schema_1.Person),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonResolver);
exports.PersonResolver = PersonResolver;
//# sourceMappingURL=person.resolver.js.map