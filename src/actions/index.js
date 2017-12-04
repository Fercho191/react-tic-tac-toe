import * as types from './types';

export const newStep = (squares) => ({
    type: types.GAME_NEW_STEP,
    squares
});
