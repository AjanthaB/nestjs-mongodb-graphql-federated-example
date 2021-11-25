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
exports.PostResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_person_input_1 = require("./dto/create-person.input");
const post_service_1 = require("./post.service");
const person_schema_1 = require("./schemas/person.schema");
const post_schema_1 = require("./schemas/post.schema");
let PostResolver = class PostResolver {
    constructor(postService) {
        this.postService = postService;
    }
    async post(id) {
        return this.postService.findById(id);
    }
    async posts() {
        return this.postService.findAll();
    }
    resolveReference(reference) {
        return this.postService.findById(reference._id);
    }
    person(post) {
        return { __typename: 'Person', _id: post.authorId };
    }
    async createPost(createJobFile) {
        return this.postService.create(createJobFile);
    }
};
__decorate([
    (0, graphql_1.Query)(() => post_schema_1.Post),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "post", null);
__decorate([
    (0, graphql_1.Query)(() => [post_schema_1.Post]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "posts", null);
__decorate([
    (0, graphql_1.ResolveReference)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "resolveReference", null);
__decorate([
    (0, graphql_1.ResolveField)((of) => person_schema_1.Person, { name: 'person' }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_schema_1.Post]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "person", null);
__decorate([
    (0, graphql_1.Mutation)(() => post_schema_1.Post),
    __param(0, (0, graphql_1.Args)('createPostInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_person_input_1.CreatePostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
PostResolver = __decorate([
    (0, graphql_1.Resolver)(() => post_schema_1.Post),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=post.resolver.js.map