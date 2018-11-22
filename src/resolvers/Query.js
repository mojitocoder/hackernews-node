function feed(root, args, context, info) {
  return context.db.query.links({}, info)
}

function info() {
  return "Welcome to GraphQL"
}

module.exports = {
  feed,
  info,
}
