import {createSlice} from "@reduxjs/toolkit";

const  name = "date";

export const initialState = {
    date: null,
    loading: false,
    error: null,
}

const dateSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchDateRequest(state) {
            state.loading = true
            state.error = null
        },
        fetchDateSuccess(state, action) {
            state.loading = false
            state.date = action.payload
        },
        fetchDateFailure(state, action) {
            state.loading = false
            state.error = action.payload
        },
    },
})


export default dateSlice