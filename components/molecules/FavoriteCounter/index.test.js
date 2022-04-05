import React from "react";
import { render, screen } from "@testing-library/react";
import { DataContext } from "../../../context/ContextProvider";
import FavoriteCounter from ".";

// eslint-disable-next-line no-underscore-dangle
const __mockProduct1__ = {
	id: 1,
	title: "Xiaomi Redmi Note 10 Pro 128GB 6GB ram Gri Cep Telefonu (Xiaomi Türkiye Garantili)",
	imageFile: "714906545_tn50_0.jpg",
	detailUrl: "",
	cargoType: 1,
	price: 6599.99,
	favorite: true,
};

let productData = [];
let dataFilter = "all";

const value = {
	productData,
	setProductData: jest.fn((val) => {
		productData = [...val];
	}),
	dataFilter,
	setDataFilter: jest.fn((val) => {
		dataFilter = val;
	}),
};

describe("Favorite Counter Tests", () => {
	test("Should be redered properly", () => {
		render(
			<DataContext.Provider value={value}>
				<FavoriteCounter />
			</DataContext.Provider>
		);
		expect(screen.getByTestId("redheart")).toBeInTheDocument();
		expect(screen.getByRole("heading")).toBeInTheDocument();
	});

	test('Should be written "0 Ürün" initially', () => {
		render(
			<DataContext.Provider value={value}>
				<FavoriteCounter />
			</DataContext.Provider>
		);
		expect(screen.getByRole("heading").textContent).toBe("0 Ürün");
	});

	test('When favorite product set by changing context should be written "1 Ürün"', () => {
		productData = [__mockProduct1__];
		render(
			<DataContext.Provider value={value}>
				<FavoriteCounter />
			</DataContext.Provider>
		);
		expect(screen.getByRole("heading").textContent).toBe("1 Ürün");
	});
});
