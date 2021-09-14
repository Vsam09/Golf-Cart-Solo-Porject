import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* getClubType(action) {
    console.log('getClubDetails', action.payload)
    try{
      const golfClubType = yield axios.get (`/api/golfclub/clubtype/${action.payload}`)
      console.log('what is my clubs', golfClubType.data)
      yield put({ type: 'SET_DETAILS', payload: golfClubType.data});
    }
    catch(error) {
        console.log('golfClubType has error', error)
    }
  };
  
  function* clubTypeSaga() {
      yield takeLatest('GET_CLUB_TYPE', getClubType);
    }
    
    export default clubTypeSaga;