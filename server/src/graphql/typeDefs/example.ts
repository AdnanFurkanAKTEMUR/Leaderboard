const { gql } = require("apollo-server");

export default gql`
  type Example {
    id: String
    exampleTitle: String
    exampleDesc: String
  }
  input deleteInput {
    id: String!
  }
  type Query {
    getAllExamples: [Example]
  }
  type Mutation {
    deleteExample(input: deleteInput!): Example
    generateUsers: String
  }
`;
