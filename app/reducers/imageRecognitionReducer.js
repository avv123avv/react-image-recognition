import { SET_SERIAL_NUMBER, RESET_SERIAL_NUMBER
}         from '../actions/recoginitionActions';

const initialState = {
    number: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RESET_SERIAL_NUMBER:
            return Object.assign({...initialState});
        case SET_SERIAL_NUMBER:
            state.number = action.number;
            return Object.assign({...state});
        default:
            return state;
    }
}