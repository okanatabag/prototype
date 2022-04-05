import React, { useContext, useEffect } from "react";
<<<<<<< HEAD
import PropTypes from "prop-types";
import { Title } from "../../atoms";
import { FavoriteCounter, ProductCard } from "../../molecules";

import {
	ProductCardsContainer,
	ProductCardsGrid,
	SummaryGrid,
	FavoriteTogglerButton,
=======
import { Title } from "../../atoms";
import {FavoriteCounter, ProductCard} from "../../molecules";
import {
  ProductCardsContainer,
  ProductCardsGrid,
  SummaryGrid,
  FavoriteTogglerButton,
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
} from "./styles";
import { DataContext } from "../../../context/ContextProvider";

export default function Layout({ data }) {
<<<<<<< HEAD
	const { productData, setProductData, dataFilter, setDataFilter } =
		useContext(DataContext);

	useEffect(() => {
		setProductData([...data]);
	}, [data, setProductData]);

	const toggleDataFilter = () => {
		const newFilter = dataFilter === "all" ? "favorite" : "all";
		setDataFilter(newFilter);
	};

	return (
		<>
			<SummaryGrid>
				<FavoriteCounter />
				<FavoriteTogglerButton
					onClick={() => toggleDataFilter()}
					filter={dataFilter}
					type="button"
				>
					Beğendiklerim
				</FavoriteTogglerButton>
			</SummaryGrid>
			<ProductCardsContainer>
				<Title mrg="20px">İlginizi Çekebilecek Ürünler</Title>
				<ProductCardsGrid>
					{(dataFilter === "all" &&
						productData.map((product) => (
							<ProductCard key={product.id} product={product} />
						))) ||
						productData
							.filter((product) => product.favorite === true)
							.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
				</ProductCardsGrid>
			</ProductCardsContainer>
		</>
	);
}

Layout.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
=======
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
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
