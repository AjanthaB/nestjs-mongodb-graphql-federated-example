import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        // ... Apollo server options
        cors: true,
        // playground: true
        plugins: [
          ApolloServerPluginLandingPageGraphQLPlayground()
        ]
      },
      gateway: {
        serviceList: [
          { name: 'people', url: 'http://localhost:4001/graphql' },
          { name: 'posts', url: 'http://localhost:4002/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}