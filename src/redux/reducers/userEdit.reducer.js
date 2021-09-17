const editUserClub = (state = { clubtype: '', brand: '', description: '', url: '', price: ''}, action) => {
    switch (action.type) {
        case 'SET_EDIT_CLUB':
            return action.payload;
        case 'RESET_EDIT_CLUB':
            return { clubtype: '', brand: '', description: '', url: '', price: ''};
        case 'UPDATE_EDIT_CLUB':
            return { ...state, ...action.payload};
        default:
            return state;
    }
}
 export default editUserClub;