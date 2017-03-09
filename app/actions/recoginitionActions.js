import { polyfill }     from 'es6-promise';
import request          from 'axios';

export const SET_SERIAL_NUMBER     = 'SET_SERIAL_NUMBER';
export const RESET_SERIAL_NUMBER   = 'RESET_SERIAL_NUMBER';

polyfill();


export function setSerialNumber(number) {
    return {type: SET_SERIAL_NUMBER, number: number};
}

export function resetSerialNumber() {
    return {type: RESET_SERIAL_NUMBER};
}

export function recognizeImage(dispatch, image) {
    return makeRecognizeImageRequest({method:'post', data: {image:image}, api:'/recognizeImage'})
        .then((result) => {
            if (result.status === 200 && result.data.result) {
                return dispatch(setSerialNumber(result.data.result));
            }
        })
        .catch((e) => { console.error(e)});

}

export function makeRecognizeImageRequest({method, data, api, id}) {
    return request[method](api + (id ? ('/' + id) : ''), data);
}