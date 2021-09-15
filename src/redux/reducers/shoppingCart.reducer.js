const shoppingCart = (state = [], action) => {
    switch(action.type) {
        case ('SET_SHOPPING_CART'):
            return action.payload;
        case ('DELETE_ITEM'):
            return state.filter((state) => state.id !== action.payload);
           default:
               return state;
    }
};
export default shoppingCart;