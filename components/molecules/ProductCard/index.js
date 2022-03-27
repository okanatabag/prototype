import React,{useContext} from "react";
import Image from "next/image";
import {
  CardContainer,
  ImageContainer,
  ProductPriceContainer,
  ProductTitle,
  CargoContainer,
} from "./styles";
import FavoriteButton from "../FavoriteButton";
import { cargoStates } from "../../../helpers/statics";
import { TruckIcon } from "@heroicons/react/solid";
import { DataContext } from "../../../context/ContextProvider";
import { gql } from "@apollo/client";
import client from "../../../helpers/apolloClient";


export default function ProductCard({ product }) {
  const {productData, setProductData} = useContext(DataContext);
  
  const favoriteHandler = (product)=>{
    const productIndex=productData.findIndex(p => p.id===product.id);
    productData[productIndex].favorite=!product.favorite;
    setProductData([...productData]);
    mutateFavorite(product.id);
  }

  const mutateFavorite = async (id) => {
    await client.mutate({
      mutation: gql`mutation SetFavoriteState($setFavoriteStateId: Int!) {
        setFavoriteState(id: $setFavoriteStateId)
      }`,
      variables: { setFavoriteStateId: id },
  });
}

  return (
    <CardContainer>
      <FavoriteButton onClick={()=>favoriteHandler(product)} fav={product.favorite}  />
      <ImageContainer>
        <Image
          layout="fill"
          src={`/images/${product.imageFile}`}
          alt=""
        />
      </ImageContainer>
      <ProductTitle size="1.5" mrg="5px">
        {product.title}
      </ProductTitle>
      <ProductPriceContainer>
        {product.price.toLocaleString("tr-TR", {
          style: "currency",
          currency: "TRY",
        })}
      </ProductPriceContainer>
      <CargoContainer>
        {product.cargoType > 0 && <><TruckIcon /> <span>{cargoStates[product.cargoType]}</span></>}
      </CargoContainer>
    </CardContainer>
  );
}
