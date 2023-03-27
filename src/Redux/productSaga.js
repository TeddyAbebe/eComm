import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  //   console.log("get Product saga called");
  let data = yield fetch("http://localhost:3001/products");
  data = yield data.json();
  console.log("PRODUCT_LIST action is called :", data);
  yield put({
    type: SET_PRODUCT_LIST,
    data,
  });
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3001/products?q=${data.query}`);
  result = yield result.json();
  console.log("SET_PRODUCT_LIST action is called :", result);
  yield put({
    type: SET_PRODUCT_LIST,
    data: result,
  });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
