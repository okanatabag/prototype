var products = [
  {
    id: 1,
    title:
      "Xiaomi Redmi Note 10 Pro 128GB 6GB ram Gri Cep Telefonu (Xiaomi Türkiye Garantili)",
    imageFile: "714906545_tn50_0.jpg",
    detailUrl: "",
    cargoType: 1,
    price: 6599.99,
    favorite: false,
  },
  {
    id: 2,
    title:
      "Xiaomi Jimmy Jv83 Dikey Şarjlı Süpürge 450W (Distribütör Garantili) 25.2 Volt",
    imageFile: "689562388_tn50_0.jpg",
    detailUrl: "",
    cargoType: 2,
    price: 3524.9,
    favorite: false,
  },
  {
    id: 3,
    title: "Arçelik 900KM A++ Isı Pompalı Çelik Kazan Kurutma Makinası",
    imageFile: "780245734_tn50_0.jpg",
    detailUrl: "",
    cargoType: 2,
    price: 6500.99,
    favorite: false,
  },
  {
    id: 4,
    title:
      'Samsung 50Q60T 50" 127 Ekran Uydu Alıcılı 4K Ultra HD Smart QLED TV-(OUTLET ÜRÜN)',
    imageFile: "781275062_tn50_0.jpg",
    detailUrl: "",
    cargoType: 2,
    price: 10099.99,
    favorite: false,
  },
];

const getProducts = () => {
  return Promise.resolve(products);
};

const getFavoriteProducts = () => {
  return Promise.resolve(products.filter(product => product.favorite === true));
};

const setFavoriteState = ({productId}) => {
  let index = products.findIndex(product => product.id === productId);
  let stateOfFoundProduct=products[index].favorite
  products[index].favorite = !products[index].favorite;
  return Promise.resolve((stateOfFoundProduct!==products[index].favorite));
};

module.exports = {
  Query: {
    products: async () => getProducts(),
    favoriteProducts: async () => getFavoriteProducts(),
  },
  Mutation: {
    setFavoriteState: async (_, { id }) => setFavoriteState({ productId: id }),
  },
};
