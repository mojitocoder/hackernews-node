const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

let links = [{
  id: 'link-0',
  url: 'www.simplybusiness.co.uk',
  description: 'Simply Business website'
}]

let idCount = links.length

const resolvers = {
  Query: {
    info: () => `Hackernew Clone using GraphQL`,
    feed: (root, args, context, info) => {
      return context.db.query.links({}, info)
    },
    link: (root, args) => {
      return links.filter(link => link.id === args.id)[0]
    },
  },
  Mutation: {
    post: (root, args, context, info) => {
      return context.db.mutation.createLink({
        data: {
          description: args.description,
          url: args.url,
        }
      }, info)     
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
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/public-graytracker-771/hackernews-node/dev',
      secret: 'blahsecret',
      debug: true,
    }),
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
