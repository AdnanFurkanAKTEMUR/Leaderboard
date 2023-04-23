import { gql } from "@apollo/client"

export const PASS_WEEK = gql`
  mutation PassWeek {
    passWeek {
      id
      user_name
      money
      rank
      country
    }
  }
`

export const GEL_ALL_USERS = gql`
  query GetAllUsers($input: getAllUsersInput) {
    getAllUsers(input: $input) {
      id
      user_name
      money
      rank
      country
    }
  }
`