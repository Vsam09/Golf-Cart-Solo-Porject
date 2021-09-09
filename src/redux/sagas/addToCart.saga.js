import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';
function* addToCart() {
    
  try{
    const items = yield axios.post ('/api/golfclub')
    yield put({ type: 'FETCH_CLUBS', payload: items.data});
  }
  catch(error) {
      console.log('Add to Cart Error', error)
  }
};
function* addToCartSaga() {
    yield takeLatest('ADD_TO_CART', addToCart);
}
  
  export default addToCartSaga;