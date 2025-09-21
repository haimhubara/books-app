export const filterReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case "PRODUCT_LIST":
            return {products: payload.products}
        case "SORT_BY":
            return
    
        case "RATINGS":
            return
        case "BEST_SELLER":
            return
        case "IN_STOCK":
            return
        case "CLEAR_FILTER":
            return
        default:
            throw new Error("No Case Found!");
            
    }
}