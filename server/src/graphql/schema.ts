const { makeExecutableSchema } = require("@graphql-tools/schema")
import exampleTypDefs from "./typeDefs/example"
import exampleResolvers from "./resolvers/example"


export default makeExecutableSchema({
  typeDefs: [exampleTypDefs],
  resolvers: [exampleResolvers]
})

