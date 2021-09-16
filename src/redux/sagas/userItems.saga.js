import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';
function* fetchUserItems() {
    
  try{
    const items = yield axios.get ('/api/golfclub/useritems')
    yield put({ type: 'SET_USER_ITEMS', payload: items.data});
  }
  catch(error) {
      console.log('getItems at shelfItem has error', error)
  }
};
function* userItemsSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchUserItems);
}
  
  export default userItemsSaga;