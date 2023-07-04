import { put, takeEvery } from 'redux-saga/effects'

import {
    fetchDateRequest,
    fetchDateFailure,
    fetchDateSuccess,
} from '../actions/dateActions'
import axios from "axios";

export function* fetchDate() {
    try {
        const { data } = yield axios('https://dpg.gg/test/calendar.json');
        yield put(fetchDateSuccess(data))
    } catch (e) {
        yield put(fetchDateFailure(e))
    }
}

const coursesSagas = [
    takeEvery(fetchDateRequest, fetchDate),
]

export default coursesSagas
