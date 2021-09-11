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
function* addToCartSaga() {
    yield takeLatest('ADD_TO_CART', addToCart);
}
  
  export default addToCartSaga;