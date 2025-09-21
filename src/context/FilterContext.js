import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers"

const filterInitialState = {
    products: [],
    inStock : false,
    bestSeller: false,
    sortBy: null,
    ratings:null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state , dispatch] = useReducer(filterReducer,filterInitialState)
    
    const initProductsList = (products) => {
      dispatch({
        type:"PRODUCT_LIST",
        payload:{
          products:products
        }
      })
    }
    const value = {
        products: state.products,
        initProductsList
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