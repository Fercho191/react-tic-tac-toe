import * as types from '../actions/types';

export const initialState = {
    history: [{
        squares: new Array(9).fill(null),
    }],
    xIsNext: true,
    stepNumber: 0,
    lines: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],
    winnerLine: -1
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
                winnerLine: -1
            };
        case types.GAME_NEW_WINNER:
            return {
                ...state,
                winnerLine: action.line
            };
        default:
            return state;
    }
};