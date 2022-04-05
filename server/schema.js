const { gql } = require("apollo-server");
<<<<<<< HEAD

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
=======
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
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
`;
module.exports = typeDefs;
