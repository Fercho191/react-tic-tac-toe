import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import './index.css';
import Game from './components/game/game';
import {game} from "./reducer";

let store = createStore(game);

console.log(store.getState());
store.dispatch({ type: 'MARK_POSITION'});
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);