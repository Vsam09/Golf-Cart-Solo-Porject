import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';
function* fetchClubs() {
    
  try{
    const items = yield axios.get ('/api/golfclub')
    yield put({ type: 'SET_ITEM', payload: items.data});
  }
  catch(error) {
      console.log('getItems at shelfItem has error', error)
  }
};
function* golfSaga() {
    yield takeLatest('FETCH_CLUBS', fetchClubs);
}
  
  export default golfSaga;