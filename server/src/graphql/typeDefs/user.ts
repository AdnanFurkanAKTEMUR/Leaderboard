const { gql } = require("apollo-server");

export default gql`
  type User {
    id: String
    user_name: String
    money: Float
    rank: Int
    country: String
  }
  input getAllUsersInput{
    start: Int!
    end: Int!
    query: String
    country: Boolean
  }

  type Query {
    getAllUsers(input: getAllUsersInput): [User]
  }
  type Mutation {
    passWeek:[User]
  }
`;
