import { combineReducers } from 'redux'
import dateSlice from "./slice/dateSlice";


const rootReducer = combineReducers({
  date: dateSlice.reducer,
})

export default rootReducer
