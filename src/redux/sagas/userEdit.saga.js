import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* userEdit(action) {
    try{
      const edit = yield axios.get (`/api/golfclub/user/${action.payload}`)
      console.log('Am i editing', edit.data)
      yield put({ type: 'SET_EDIT_CLUB', payload: edit.data});
    }
    catch(error) {
        console.log('User Edit has error', error)
    }
  };
  function* saveClubEdit(action) {
    console.log('READ MEEEEE NOWWWW!!', action.payload)
    if (action.payload.id) {
        yield axios.put(`/api/golfclub/useritems/${action.payload.id}`, action.payload);
    }
    // else {
    //     yield axios.post('/api/golfclub/useritems', action.payload);
    // }

    yield put({ type: 'FETCH_CLUBS' });
}

  function* userEditSaga() {
      yield takeEvery('USER_EDIT', userEdit);
      yield takeEvery('SAVE_USER_EDIT', saveClubEdit);
    }
    
    export default userEditSaga;