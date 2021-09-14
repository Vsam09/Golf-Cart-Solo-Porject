import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItem(action){
    try{
        yield axios.delete(`api/golfclub/details/${action.payload}`);
        yield put({
            type: 'FETCH_CLUBS'
        })
    } catch (error){
        console.log(error)
    }
  }; 
  function* removeItemSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
  }
  
  export default removeItemSaga;