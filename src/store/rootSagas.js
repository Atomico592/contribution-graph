import { all } from 'redux-saga/effects'
import dateSagas from "./sagas/dateSagas";


export default function* rootSagas() {
  yield all([
    ...dateSagas,
  ])
}
