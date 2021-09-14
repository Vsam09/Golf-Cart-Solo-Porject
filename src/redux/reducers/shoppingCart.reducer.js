const shoppingCart = (state = [], action) => {
    switch(action.type) {
        case ('ADD_ITEM'):
            return [...state, action.payload];
        case ('CLEAR'):
            return [];
    }
    return state;
};
export default shoppingCart;