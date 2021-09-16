import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* deleteItem(action){
    try{
        yield axios.delete(`api/golfclub/details/${action.payload}`);
        yield put({
            type: 'FETCH_SHOPPING_CART'
        })
    } catch (error){
        console.log(error)
    }
  }; 
  function* deleteUserItem(action){
    try{
        yield axios.delete(`api/golfclub/user/${action.payload}`);
        yield put({
            type: 'FETCH_USER_ITEMS'
        })
    } catch (error){
        console.log(error)
    }
  }; 
  function* removeItemSaga() {
    yield takeLatest('DELETE_ITEM', deleteItem);
    yield takeLatest('DELETE_USER_ITEM', deleteUserItem);
  }
  
  export default removeItemSaga;