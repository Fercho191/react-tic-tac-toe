import * as types from '../actions/types';

export const initialState = {
    current: 0
};

export const game = (state = initialState, action) => {
    switch (action.type){
        case types.MARK_POSITION:
            return {
                ...state,
                current: state.current + 1
            };
        default:
            return state;
    }
};