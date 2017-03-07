import { UPLOADED_IMAGE, RESET_IMAGE
}         from '../actions/cloudimageActions';

const initialState = {
    image: {
        url     :'',
        data    :''
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RESET_IMAGE:
            return Object.assign({...initialState});
        case UPLOADED_IMAGE:
            state.image = action.image;
            return Object.assign({...state});
        default:
            return state;
    }
}