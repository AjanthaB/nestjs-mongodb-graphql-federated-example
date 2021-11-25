"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const graphql_1 = require("@nestjs/graphql");
const path_1 = require("path");
const post_module_1 = require("./modules/post/post.module");
const person_schema_1 = require("./modules/post/schemas/person.schema");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: configService.get('database.uri'),
                }),
                inject: [config_1.ConfigService],
            }),
            graphql_1.GraphQLFederationModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/graphql-schema.gql'),
                playground: true,
                buildSchemaOptions: {
                    orphanedTypes: [person_schema_1.Person],
                },
                plugins: []
            }),
            post_module_1.PostModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map