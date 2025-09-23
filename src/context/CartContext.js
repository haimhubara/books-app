import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducers";

const cartInitialState = {
    cartList:[],
    totalAmount:0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)


    const value = {
        state,
        cartList:state.cartList,
        totalAmount:state.totalAmount,
        dispatch,
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}



export const useCart = () => {
    const context = useContext(CartContext)
    return context;
} 