import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* addNewClub(action) {
    try{
        yield axios.post('/api/golfclub/newGolfClub', action.payload)
        yield put ({ type: 'FETCH_CLUBS' });
    }
    catch(error) {
        console.log('addNewClub saga has an error', error)
    }
};
function* addNewClubSaga() {
    yield takeLatest('ADD_NEW_CLUB', addNewClub);
}
  
  export default addNewClubSaga;