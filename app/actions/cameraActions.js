export const RESET_CAMERA               = 'RESET_CAMERA';
export const MAKE_SERIAL_NUMBER_CROP    = 'MAKE_SERIAL_NUMBER_CROP';
export const MAKE_PHOTO                 = 'MAKE_PHOTO';

export function makePhoto(photo) {
    return {type: MAKE_PHOTO, photo: photo};
}

export function makeSerialNumberCrop(croppedPhoto) {
    return {type: MAKE_SERIAL_NUMBER_CROP, croppedPhoto: croppedPhoto};
}

export function resetCamera() {
    return {type: RESET_CAMERA};
}