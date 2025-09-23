export const cartReducer  = (state, action) =>{
    const {type, payload} = action;
    switch (type) {
       case "ADD_VALUE": {
            const { product } = payload;
            const { cartList, totalAmount } = state;
            if (cartList.some(p => p.id === product.id)) {
                return state; 
            }

            const newTotalAmount = totalAmount + product.price;
            const newCartList = [...cartList, product];

            return {
                cartList: newCartList,
                totalAmount: newTotalAmount
            };
        }
       case "REMOVE_VALUE": {
            const { product } = payload;
            const { cartList, totalAmount } = state;

            const exists = cartList.find(prod => prod.id === product.id);
            if (!exists) {
                return state;
            }

            const updatedList = cartList.filter(prod => prod.id !== product.id);
            const updatedTotalAmount = Math.max(0, totalAmount - product.price);

            return {
                cartList: updatedList,
                totalAmount: updatedTotalAmount
            };
        }
        case "PLACE_ORDER":{
             return{
                cartList: [],
                totalAmount:0 
             };
        }
        default:
            throw new Error("No case found!");
            
    }
}