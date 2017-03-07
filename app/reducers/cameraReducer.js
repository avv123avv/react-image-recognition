import { SHOW_CAMERA, HIDE_CAMERA,
    MAKE_PHOTO}         from '../actions/cameraActions';

const initialState = {
    showCamera: false,
    photo: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_CAMERA:
            state.showCamera = true;
            return Object.assign({...state});
        case HIDE_CAMERA:
            state.showCamera = false;
            return Object.assign({...state});
        case MAKE_PHOTO:
            state.photo = action.photo;
            return Object.assign({...state});
        default:
            return state;
    }
}