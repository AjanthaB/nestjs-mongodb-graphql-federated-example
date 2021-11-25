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
exports.Person = void 0;
const graphql_1 = require("@nestjs/graphql");
const post_schema_1 = require("./post.schema");
let Person = class Person {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, graphql_1.Directive)('@external'),
    __metadata("design:type", String)
], Person.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [post_schema_1.Post]),
    __metadata("design:type", Array)
], Person.prototype, "posts", void 0);
Person = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, graphql_1.Directive)('@extends'),
    (0, graphql_1.Directive)('@key(fields: "_id")')
], Person);
exports.Person = Person;
//# sourceMappingURL=person.schema.js.map