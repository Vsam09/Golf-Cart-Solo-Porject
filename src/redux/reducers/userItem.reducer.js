const userItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_ITEMS':
            return action.payload
        case ('DELETE_USER_ITEM'):
            return state.filter((state) => state.id !== action.payload);
        default:
            return state;
    }
    
}
export default userItemsReducer;