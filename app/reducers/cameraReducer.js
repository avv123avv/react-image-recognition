import { RESET_CAMERA, MAKE_SERIAL_NUMBER_CROP,
    MAKE_PHOTO, UPLOAD_IMAGE}         from '../actions/cameraActions';

const initialState = {
    showCamera                  : false,
    uploadImage                 : false,
    photo                       : {},
    croppedSerialNumberPhoto    : {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RESET_CAMERA:
            return Object.assign({...initialState});
        case MAKE_SERIAL_NUMBER_CROP:
            state.croppedSerialNumberPhoto = action.croppedPhoto;
            return Object.assign({...state});
        case UPLOAD_IMAGE:
            state.uploadImage = true;
            return Object.assign({...state});
        case MAKE_PHOTO:
            state.photo = action.photo;
            return Object.assign({...state});
        default:
            return state;
    }
}