import * as types from '../actions/types';

export const initialState = {
    history: [{
        squares: new Array(9).fill(null),
    }],
    xIsNext: true,
    stepNumber: 0
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type){
        case types.GAME_NEW_STEP:
            console.log(action)
            return {
                ...state,
                history: state.history.concat([{
                    squares: action.squares,
                }]),
                xIsNext: !state.xIsNext,
                stepNumber: state.history.length
            };
        default:
            return state;
    }
};