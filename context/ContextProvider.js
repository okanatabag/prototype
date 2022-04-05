<<<<<<< HEAD
import React, { useState, createContext, useMemo } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();
function ContextProvider({ children }) {
	const [productData, setProductData] = useState([]);
	const [dataFilter, setDataFilter] = useState("all");
	const values = useMemo(
		() => ({
			productData,
			setProductData,
			dataFilter,
			setDataFilter,
		}),
		[productData, dataFilter]
	);
	return (
		<DataContext.Provider value={values}>{children}</DataContext.Provider>
	);
}

ContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { ContextProvider, DataContext };
=======
import React,{useState,createContext} from 'react';
const DataContext = createContext();
function ContextProvider({ children }) {
    const [productData, setProductData] = useState([]);
    const [dataFilter, setDataFilter] = useState('all');
    const values = {
        productData,
        setProductData,
        dataFilter,
        setDataFilter
    };
    return (
        <DataContext.Provider value={values}>{children}</DataContext.Provider>
    );
}

export {ContextProvider, DataContext}
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
