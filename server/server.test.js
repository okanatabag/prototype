const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

describe("Apollo Server Tests", () => {
  let testServer;
  beforeEach(() => {
    testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
  });
  it("all products should be returned", async () => {
    const result = await testServer.executeOperation({
      query: `query Products {
        products {
          id
          title
          imageFile
          detailUrl
          cargoType
          price
          favorite
        }
      }`,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.products.length).toBeGreaterThan(0);
  });

  it("all products' favorite state should be false initially", async () => {
    const result = await testServer.executeOperation({
      query: `query Products {
        products {
          id
          title
          imageFile
          detailUrl
          cargoType
          price
          favorite
        }
      }`,
    });

    expect(
      result.data.products.find((product) => product.favorite === true)
    ).toBeUndefined();
  });

  it("favoriteProducts should return empty array initially", async () => {
    const result = await testServer.executeOperation({
      query: `query FavoriteProducts {
        favoriteProducts {
          id
          title
          imageFile
          detailUrl
          cargoType
          price
          favorite
        }
      }`,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data.favoriteProducts).toStrictEqual([]);
  });

  it("favorite state should change for one product when call setFavoriteProduct mutation", async () => {
    const result = await testServer.executeOperation({
      query: `mutation SetFavoriteState($setFavoriteStateId: Int!) {
        setFavoriteState(id: $setFavoriteStateId)
      }`,
      variables: { setFavoriteStateId: 1 },
    });
    expect(result.errors).toBeUndefined();
    expect(result.data.setFavoriteState).toBe(true);
  });
});
