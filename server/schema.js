const { gql } = require("apollo-server");
const typeDefs = gql`
  type Product {
    id: Int!
    title: String!
    imageFile: String!
    detailUrl: String
    cargoType: Int!
    price: Float!
    favorite: Boolean!
  }

  type Query {
    products: [Product]
    favoriteProducts: [Product]
  }

  type Mutation {
    setFavoriteState(id: Int!): Boolean
  }
`;
module.exports = typeDefs;
