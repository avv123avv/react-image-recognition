import { INIT, UPDATE_STEP }    from '../actions/initActions';
import {checkMobile}            from '../services';

const initialState = {
    mobile: false,
    step:1
};

export default function(state = initialState, action) {
    switch (action.type) {
        case INIT:
            if(checkMobile()) state.mobile = true;
            return Object.assign({...state});
        case UPDATE_STEP:
            state.step = action.step;
            return Object.assign({...state});
        default:
            return state;
    }
}