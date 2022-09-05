import { all } from 'redux-saga/effects'; 
import { categorySaga } from 'store/categories/saga';

export function* rootSaga() {
  yield all([categorySaga()]);
}
