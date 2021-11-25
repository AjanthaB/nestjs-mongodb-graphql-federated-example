import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './config/configuration';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { PostModule } from './modules/post/post.module';
import { Person } from './modules/post/schemas/person.schema';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database.uri'),
      }),
      inject: [ConfigService],
    }),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      playground: true,
       buildSchemaOptions: {
        orphanedTypes: [Person],
      },
      plugins: [
        // ApolloServerPluginLandingPageGraphQLPlayground()
      ]
    }),
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
