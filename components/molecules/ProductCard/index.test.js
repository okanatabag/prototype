<<<<<<< HEAD
import React from "react";
import { render, screen } from "@testing-library/react";
import { DataContext } from "../../../context/ContextProvider";
import ProductCard from "./index";

// eslint-disable-next-line no-underscore-dangle
const __mockProduct__ = {
	id: 1,
	title: "Xiaomi Redmi Note 10 Pro 128GB 6GB ram Gri Cep Telefonu (Xiaomi Türkiye Garantili)",
	imageFile: "714906545_tn50_0.jpg",
	detailUrl: "",
	cargoType: 1,
	price: 6599.99,
	favorite: false,
};

// eslint-disable-next-line no-underscore-dangle
const __mockProductFavorite__ = {
	id: 1,
	title: "Xiaomi Redmi Note 10 Pro 128GB 6GB ram Gri Cep Telefonu (Xiaomi Türkiye Garantili)",
	imageFile: "714906545_tn50_0.jpg",
	detailUrl: "",
	cargoType: 1,
	price: 6599.99,
	favorite: true,
};

let productData = [__mockProduct__];
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

describe("ProductCard Tests", () => {
	test("Should be redered properly", () => {
		render(
			<DataContext.Provider value={value}>
				<ProductCard product={__mockProduct__} />
			</DataContext.Provider>
		);
		expect(screen.getByText(/Xiaomi/i)).toBeInTheDocument();
		expect(screen.getByRole("img")).toBeInTheDocument();
		expect(screen.getByRole("button").getAttribute("class")).toMatch(
			/FavButton/
		);
		expect(screen.getByText(/₺6.599,99/i)).toBeInTheDocument();
	});

	test("Favorite button should have grey color initially", () => {
		render(
			<DataContext.Provider value={value}>
				<ProductCard product={__mockProduct__} />
			</DataContext.Provider>
		);
		expect(
			window
				.getComputedStyle(screen.getByRole("button").children[0])
				.getPropertyValue("color")
		).toBe("rgb(204, 204, 204)");
	});

	test("When click the favorite button it should turn into the red", () => {
		render(
			<DataContext.Provider value={value}>
				<ProductCard product={__mockProductFavorite__} />
			</DataContext.Provider>
		);
		expect(
			window
				.getComputedStyle(screen.getByRole("button").children[0])
				.getPropertyValue("color")
		).toBe("red");
	});
});
=======
import React from 'react'
import { DataContext } from "../../../context/ContextProvider"
import { render, screen } from '@testing-library/react'
import ProductCard from './index'

const __mockProduct__ = {
    id: 1,
    title: "Xiaomi Redmi Note 10 Pro 128GB 6GB ram Gri Cep Telefonu (Xiaomi Türkiye Garantili)",
    imageFile: "714906545_tn50_0.jpg",
    detailUrl: "",
    cargoType: 1,
    price: 6599.99,
    favorite: false
}

const __mockProductFavorite__ = {
    id: 1,
    title: "Xiaomi Redmi Note 10 Pro 128GB 6GB ram Gri Cep Telefonu (Xiaomi Türkiye Garantili)",
    imageFile: "714906545_tn50_0.jpg",
    detailUrl: "",
    cargoType: 1,
    price: 6599.99,
    favorite: true
}


let productData=[__mockProduct__]
let dataFilter='all';

const value = {
    productData,
    setProductData:jest.fn((val)=>{productData=[...val]}),
    dataFilter,
    setDataFilter:jest.fn((val)=>{dataFilter=val}),
}

describe('ProductCard Tests', ()=>{
    test('Should be redered properly',()=>{
        render(<DataContext.Provider value={value}><ProductCard product={__mockProduct__}/></DataContext.Provider>);
        expect(screen.getByText(/Xiaomi/i)).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByRole('button').getAttribute('class')).toMatch(/FavButton/);
        expect(screen.getByText(/₺6.599,99/i)).toBeInTheDocument()
    });

    test('Favorite button should have grey color initially', ()=>{
        render(<DataContext.Provider value={value}><ProductCard product={__mockProduct__}/></DataContext.Provider>);
        expect(window.getComputedStyle(screen.getByRole('button').children[0]).getPropertyValue("color")).toBe('rgb(204, 204, 204)');
    });

    test('When click the favorite button it should turn into the red',()=>{
        render(<DataContext.Provider value={value}><ProductCard product={__mockProductFavorite__}/></DataContext.Provider>);
        expect(window.getComputedStyle(screen.getByRole('button').children[0]).getPropertyValue("color")).toBe('red');
    });
})
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
