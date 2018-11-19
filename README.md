GrapQL
===

1. A quick intro of GraphQL's Schema Definition Language (SDL) is available here: https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce51

2. Core concept tutorial is here: https://www.howtographql.com/basics/2-core-concepts/

3. GraphQL Schema:

  + The convention is to use the file extension `.graphql`

  + 3 `root types`:
    + Query
    + Mutation: Create, update, delete
    + Subscription
  + Fields on `root types` are called `root fields`
  + When sending queries/mutation/subscriptions to the server, these always need to start with a `root fields`

4. Useful commands:
   + `node src/index.js`: To start the graphql web server
   + `graphql playground`: To open both playgrounds (user facing + Prisma backend GraphQL API) in the same browser tab
   + `prisma deploy`
   + `prisma info`

Schema:

+ Can contain root types, e.g. Query, Mutation, Subscription
+ Root types define the entry points for the API
+

6. GraphQL specification: https://facebook.github.io/graphql/
7. GraphQL server is transport layer agnostic => can be implemented on top of:
   1. TCP
   2. WebSocket

8. Resolver functions:
   1. GraphQL queries/mutations consist of a set of fields:
   2. GraphQL server has one resolver function per field
   3. The purpose of each resolver is to retrieve the data for its corresponding field
9. More about the role of GraphQL Schema: https://www.howtographql.com/graphql-js/1-getting-started/
10.











mutation CreateEvent {
  createEvent(
​    name: "My First Event"
​    when: "Today"
​    where: "My House"
​    description: "Very first event"
  ) {
​    id
​    name
  }
}

query ListEvents {
  listEvents {
​    items {
​      id
​      name
​    }
  }
}

{
  event {
​    name
  }
}
