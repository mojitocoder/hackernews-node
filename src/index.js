const { GraphQLServer } = require('graphql-yoga')

// Define GraphQL schema
const typeDefs = `
type Query {
  info: String!
}
`
const resolvers = {
  Query: {
    info: () => `This is the only field for now`
    // info: () => null,
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
