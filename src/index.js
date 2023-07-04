import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store/configureStore";
import './index.css';

const app = (
    <Provider store={store}>
        <App/>
    </Provider>

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
