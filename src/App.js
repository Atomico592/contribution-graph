import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchDateRequest} from "./store/actions/dateActions";
import store from "./store/configureStore";

const App = () => {
    const dispatch = useDispatch()
    const date = useSelector(store => store.date.date)
    useEffect(() => {
        dispatch(fetchDateRequest())
    },[dispatch])
    console.log(date)
    return (
        <div>
          test
        </div>
    );
};

export default App;