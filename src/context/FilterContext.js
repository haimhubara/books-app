import { createContext, useContext } from "react"

const FilterInitialState = {
    productList: [],
    inStock : false,
    bestSeller: false,
    sortBy: null,
    ratings:null
}

const FilterContext = createContext(FilterInitialState);

export const FilterProvider = ({children}) => {
    const value = {
        productList:[1,2,3]
    }

    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
} 