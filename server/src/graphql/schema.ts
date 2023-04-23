const { makeExecutableSchema } = require("@graphql-tools/schema")
import exampleTypDefs from "./typeDefs/example"
import exampleResolvers from "./resolvers/example"

import userTypeDefs from "./typeDefs/user"
import userResolvers from "./resolvers/user"


export default makeExecutableSchema({
  typeDefs: [exampleTypDefs, userTypeDefs],
  resolvers: [exampleResolvers, userResolvers]
})

