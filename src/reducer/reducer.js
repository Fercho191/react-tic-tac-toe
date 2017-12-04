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
            return {
                ...state,
                history: action.history.concat([{
                    squares: action.squares,
                }]),
                xIsNext: !state.xIsNext,
                stepNumber: action.history.length
            };
        case types.GAME_JUMP_TO:
            return {
                ...state,
                stepNumber: action.move,
                xIsNext: (action.move % 2) === 0,
            };
        default:
            return state;
    }
};