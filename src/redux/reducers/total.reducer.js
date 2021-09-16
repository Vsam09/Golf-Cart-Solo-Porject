const total = (state = 0, action) => {
    switch(action.type) {
        case ('ADD_PRICE'):
            return state + Number(action.payload.price);
        case ('REMOVE_PRICE'):
            return state - Number(action.payload.price);
        case ('CLEAR_CART'):
            return 0
        default:
    }
    return state;
}
export default total;