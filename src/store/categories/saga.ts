import { call, put, takeLatest } from 'redux-saga/effects';

import {
  addCategories,
  requestCategories,
  requestSubCategories,
  addSubCategoriesLevelTwo,
  addSubCategoriesLevelThree,
  addSubCategoriesLevelFour,
  addSubCategoriesLevelFive,
  requestGoods,
  addGoodsToList,
  addSubCategoriesLevelSix,
  addSubCategoriesLevelSeven,
} from '.';

import { setError, setLoading } from '$store/common';
import {  CategoryType } from 'types/categories';
import { fetchCategories,  fetchSubCategories,fetchGoods } from '$services/api';

function* fetchCategoriesSaga() {


  yield put(setLoading(true));

  try {
    const categoriesResponse: { data: CategoryType[] } = yield call(fetchCategories);
    console.log('categoriesResponse',categoriesResponse.data?.items)

    yield put(addCategories(categoriesResponse.data?.items));
  } catch (err) {
    console.log(err);
    yield put(setError(err.message));
  } finally {
    yield put(setLoading(false));
  }
}

function* fetchSubCategoriesSaga(category:any) {

  yield put(setLoading(true));

  try {
    const subCategoriesResponse: { data: CategoryType[] } = yield call(fetchSubCategories,category.payload);
    if (category.payload.level===1){
      yield put(addSubCategoriesLevelTwo(subCategoriesResponse.data?.items));
    }
    if (category.payload.level===2){
      yield put(addSubCategoriesLevelThree(subCategoriesResponse.data?.items));
    }
    if (category.payload.level===3){
      yield put(addSubCategoriesLevelFour(subCategoriesResponse.data?.items));
    }
    if (category.payload.level===4){
      yield put(addSubCategoriesLevelFive(subCategoriesResponse.data?.items));
    }
    if (category.payload.level===5){
      yield put(addSubCategoriesLevelSix(subCategoriesResponse.data?.items));
    }
    if (category.payload.level===6){
      yield put(addSubCategoriesLevelSeven(subCategoriesResponse.data?.items));
    }
  } catch (err) {
    console.log(err);
    yield put(setError(err.message));
  } finally {
    yield put(setLoading(false));
  }
}

function* fetchGoodsSaga(category:any) {

  yield put(setLoading(true));

  try {
    const goodsResponse: { data: CategoryType[] } = yield call(fetchGoods,category.payload);
    console.log('goodsResponse',goodsResponse.data?.items)
    
    yield put(addGoodsToList(goodsResponse.data?.items));
   
  } catch (err) {
    console.log(err);
    yield put(setError(err.message));
  } finally {
    yield put(setLoading(false));
  }
}


export function* categorySaga() {
  yield takeLatest(requestCategories, fetchCategoriesSaga);
  yield takeLatest(requestSubCategories, fetchSubCategoriesSaga);
  yield takeLatest(requestGoods, fetchGoodsSaga);
}


