import { gql } from "@apollo/client"

const LOGIN = gql`
  mutation LoginMutation($identifier: String! $password: String!) {
    login(input: {identifier: $identifier, password: $password}){
      jwt
      user {
        id
        username
      }
    }
  }
`

export default LOGIN;