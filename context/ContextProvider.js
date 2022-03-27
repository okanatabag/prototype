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