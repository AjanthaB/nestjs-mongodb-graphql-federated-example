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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonSchema = exports.Person = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const uuid_1 = require("uuid");
let Person = class Person {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: () => (0, uuid_1.v4)() }),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Person.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Person.prototype, "age", void 0);
Person = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: { virtuals: true }
    }),
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@key(fields: "id")')
], Person);
exports.Person = Person;
exports.PersonSchema = mongoose_1.SchemaFactory.createForClass(Person);
//# sourceMappingURL=person.schema.js.map