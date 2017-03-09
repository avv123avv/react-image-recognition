import { polyfill } from 'es6-promise';
import request      from 'axios';

export const UPLOADED_IMAGE             = 'UPLOAD_IMAGE';
export const UPLOADED_IMAGE_CROPPED     = 'UPLOADED_IMAGE_CROPPED';
export const RESET_IMAGE                = 'RESET_IMAGE';

polyfill();


export function setUploadedImage(image) {
    return {type: UPLOADED_IMAGE, image: image};
}

export function setUploadedImageCropped(image) {
    return {type: UPLOADED_IMAGE_CROPPED, image: image};
}

export function resetImage() {
    return {type: RESET_IMAGE};
}

export function uploadImage(dispatch, image) {
    return makeCloudImageRequest({method:'post', data: {image:image}, api:'/uploadImage'})
        .then((result) => {
            if (result.status === 200 && result.data.result) {
                return dispatch(setUploadedImage(result.data.result));
            }
        })
        .catch((e) => { console.error(e)});

}

export function uploadImageCropped(dispatch, image) {
    return makeCloudImageRequest({method:'post', data: {image:image}, api:'/uploadImage'})
        .then((result) => {
            if (result.status === 200 && result.data.result) {
                return dispatch(setUploadedImageCropped(result.data.result));
            }
        })
        .catch((e) => { console.error(e)});

}

export function createImageResult(dispatch, image) {
    return makeCloudImageRequest({method:'post', data: {image:image}, api:'/createImageResult'})
        .then((result) => {
            if (result.status === 200) {
                // return dispatch(resetImage());
                return 'OK';
            }
        })
        .catch((e) => { console.error(e)});
}

export function makeCloudImageRequest({method, data, api, id}) {
    return request[method](api + (id ? ('/' + id) : ''), data);
}