import { gql } from "@apollo/client"

export const GET_ALL_EXAMPLES = gql`
  query GetAllExamples {
  getAllExamples {
    id
    exampleTitle
    exampleDesc
  }
}
`