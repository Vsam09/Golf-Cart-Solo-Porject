import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* getClubDetails(action) {
    try{
      const golfClubDetails = yield axios.get (`/api/golfclub/details/${action.payload}`)
      console.log('what am i', golfClubDetails.data)
      yield put({ type: 'SET_DETAILS', payload: golfClubDetails.data});
    }
    catch(error) {
        console.log('getGolfClubDetails has error', error)
    }
  };
  
  function* golfDetailsSaga() {
      yield takeLatest('GET_DETAILS', getClubDetails);
    }
    
    export default golfDetailsSaga;