import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* addToCart(action) {
    
  try{
    
    yield axios.post ('/api/golfclub', action.payload)
    yield put({ type: 'FETCH_CLUBS' });
  }
  catch(error) {
      console.log('Add to Cart Error', error)
  }
};

function* fetchShoppingCart() {
    
  try{
    
    const response = yield axios.get ('/api/golfclub/shoppingcart')
    yield put({ type: 'SET_SHOPPING_CART', payload: response.data });
  }
  catch(error) {
      console.log('Fetch Shopping Cart Error', error)
  }
};
function* addToCartSaga() {
    yield takeLatest('ADD_TO_CART', addToCart);
    yield takeLatest('FETCH_SHOPPING_CART', fetchShoppingCart);
}
  
  export default addToCartSaga;