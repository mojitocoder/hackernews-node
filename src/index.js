const { GraphQLServer } = require('graphql-yoga')

// Define GraphQL schema
const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  description: String!
  url: String!
}
`

let links = [{
  id: 'link-0',
  url: 'www.simplybusiness.co.uk',
  description: 'Simply Business website'
}]

const resolvers = {
  Query: {
    info: () => `Insurance for small businesses`,
    feed: () => links,
  },
  Link: {
    id: (root) => root.id,
    description: (root) => root.description,
    url: (root) => root.url,
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
