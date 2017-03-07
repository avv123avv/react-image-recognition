export const SHOW_CAMERA    = 'SHOW_CAMERA';
export const HIDE_CAMERA    = 'HIDE_CAMERA';
export const MAKE_PHOTO     = 'MAKE_PHOTO';

export function showCamera() {
    return {type: SHOW_CAMERA};
}

export function hideCamera() {
    return {type: HIDE_CAMERA};
}

export function makePhoto(photo) {
    return {type: MAKE_PHOTO, photo: photo};
}