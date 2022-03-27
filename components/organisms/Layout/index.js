import React, { useContext, useEffect } from "react";
import { Title } from "../../atoms";
import {FavoriteCounter, ProductCard} from "../../molecules";
import {
  ProductCardsContainer,
  ProductCardsGrid,
  SummaryGrid,
  FavoriteTogglerButton,
} from "./styles";
import { DataContext } from "../../../context/ContextProvider";

export default function Layout({ data }) {
  const { productData, setProductData, dataFilter, setDataFilter } =
    useContext(DataContext);

  useEffect(() => {
    setProductData([...data]);
  }, [data, setProductData]);

  const toggleDataFilter = () => {
    let newFilter = (dataFilter==='all') ? 'favorite':'all';
    setDataFilter(newFilter);
  }

  return (
    <>
      <SummaryGrid>
        <FavoriteCounter />
        <FavoriteTogglerButton onClick={()=>toggleDataFilter()} filter={dataFilter} type="button">
          Beğendiklerim
        </FavoriteTogglerButton>
      </SummaryGrid>
      <ProductCardsContainer>
        <Title mrg="20px">
          İlginizi Çekebilecek Ürünler
        </Title>
        <ProductCardsGrid>
          {dataFilter==='all' 
            && productData.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          }) || productData.filter(product => product.favorite===true).map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })
          }
        </ProductCardsGrid>
      </ProductCardsContainer>
    </>
  );
}
