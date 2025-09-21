export const filterReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case "PRODUCT_LIST":
            return {products: payload.products}
        case "SORT_BY":
            return {...state, sortBy:payload.sortBy}
    
        case "RATINGS":
            return {...state , ratings:payload.ratings}
        case "BEST_SELLER":
            return {...state,bestSeller:payload.bestSeller}
        case "IN_STOCK":
            return {...state,inStock:payload.inStock}
        case "CLEAR_FILTER":
            return
        default:
            throw new Error("No Case Found!");
            
    }
}