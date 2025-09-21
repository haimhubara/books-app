const FilterReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case "PRODUCT_LIST":
            return
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