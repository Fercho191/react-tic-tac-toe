import * as types from './types';

export const newStep = (squares, history) => ({
    type: types.GAME_NEW_STEP,
    squares,
    history
});

export const jumpTo = (move) => ({
    type: types.GAME_JUMP_TO,
    move
});

export const newWinner = (line) => ({
    type: types.GAME_NEW_WINNER,
    line
});
