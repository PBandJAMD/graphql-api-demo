import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
  }

  type Query {
    users: [User]
    user(id: String!): User
  }

  type Mutation {
    addUser(firstName: String, lastName: String): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;