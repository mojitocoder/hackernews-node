const { GraphQLServer } = require('graphql-yoga')

let links = [{
  id: 'link-0',
  url: 'www.simplybusiness.co.uk',
  description: 'Simply Business website'
}]

let idCount = links.length

const resolvers = {
  Query: {
    info: () => `Insurance for small businesses`,
    feed: () => links,
    link: (root, args) => {
      return links.filter(link => link.id === args.id)[0]
    },
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      }
      links.push(link)
      return link
    },
    updateLink: (root, args) => {
      let link = links.filter(link => link.id === args.id)[0]
      if (link) {
        link.url = args.url
        link.description = args.description
      }
      return link
    },
    deleteLink: (root, args) => {
      let link = links.filter(link => link.id === args.id)[0]
      if (link) {
        links = links.filter(link => link.id !== args.id)
      }
      return link
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql' ,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
