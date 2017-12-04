import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import './index.css';
import {gameReducer} from "./reducer/reducer";
import GameContainer from "./components/game/container";

let store = createStore(gameReducer);

console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
    document.getElementById('root')
);