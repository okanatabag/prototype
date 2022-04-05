import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Title } from "../../atoms";
import { FavoriteCounter, ProductCard } from "../../molecules";

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
