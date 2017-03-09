import { UPLOADED_IMAGE, RESET_IMAGE,
    UPLOADED_IMAGE_CROPPED} from '../actions/cloudimageActions';

const initialState = {
    image: {
        url     :'',
        data    :''
    },
    image_cropped: {
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
        case UPLOADED_IMAGE_CROPPED:
            state.image_cropped = action.image;
            return Object.assign({...state});
        default:
            return state;
    }
}