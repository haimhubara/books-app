import { createContext, useCallback, useContext, useReducer } from "react"
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
    
    const initProductsList = useCallback((products) => {
      dispatch({
        type:"PRODUCT_LIST",
        payload:{
          products:products
        }
      })
    },[dispatch]);
    
    const bestSeller = (products) => {
      if (state.bestSeller) {
        return products.filter(products => products.best_seller === true);
      }
      return products;
    };
    
    const inStock = (products) => {
       const res = products.filter(product => product.in_stock)
       return state.inStock ? res : products
    }

    const sort = (products) => {
      if(state.sortBy === "lowtohigh"){
        products.sort((a,b) => {
          return Number(a.price) - Number(b.price)
        })
      }
      if(state.sortBy === "hightolow"){
        products.sort((a,b) => {
          return Number(b.price) - Number(a.price)
        })
      }
      return products
    }
    const rating = (products) => {
      if(state.ratings  === "4STARS"){
        return products.filter(products => products.rating >= 4)
      }
      else if(state.ratings === "3STARS"){
        return  products.filter(products => products.rating >= 3)
      }
      else if(state.ratings === "2STARS"){
        return products.filter(products => products.rating >= 2)
      }
      else if(state.ratings === "1STARS"){
        return products.filter(products => products.rating >= 1)
      }
      else{

        return products
      }
    }


    const filterdProducts = inStock(rating(sort(bestSeller(state.products))));

    const value = {
        state,
        dispatch,
        products: filterdProducts,
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