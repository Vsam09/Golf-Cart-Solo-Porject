const total = (state = 0, action) => {
    switch(action.type) {
        case ('SET_SHOPPING_CART'):
            return state + Number(action.payload.price);
        case ('REMOVE_ITEM'):
            return state - Number(action.payload.price);
        case ('CLEAR'):
            return 0
        default:
    }
    return state;
}
export default total;