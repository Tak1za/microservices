import { gql } from "apollo-server";

const typeDefs = gql`
  type Listing {
    description: String!
    title: String!
    id: ID!
  }

  type Query {
    listings: [Listing!]!
  }
`;

export default typeDefs;
