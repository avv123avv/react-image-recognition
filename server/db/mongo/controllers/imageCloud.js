import cloudinary           from 'cloudinary';
import { polyfill }         from 'es6-promise';
import cloudinaryConfig     from '../config/cloudinaryConfig';

import Image                from '../models/image';

polyfill();

/**
 * POST /uploadImage
 * Upload image to http://cloudinary.com/ using 'cloudinary'
 * @param req
 * @param res
 */
export function uploadImage(req, res) {
    if(req.body.image) {
        //set clodinary config
        cloudinary.config({
            ...cloudinaryConfig
        });
        cloudinaryUpload(req.body.image).then((result) => {
            // console.log('UploadImage result', result);

            return res.json({
                result:result,
                status:200
            });
        })
        .catch((e)=>{
            res.status(500).json(e);
        })
    } else
        return res.status(500).send('UploadImage error!');
}

/**
 * Wrap cloudinary uload image function to Promise
 * @param image
 */
function cloudinaryUpload(image) {
    return new Promise(function(resolve, reject){
        resolve(cloudinary.uploader.upload(image, (result) => result));
    });
}

/**
 * Save the result of recognition to db
 * @param req
 * @param res
 */
export function createImageResult(req, res) {
    // console.log('createImageResult', req.body);
    Image.create(req.body.image, (e) => {
        if (e) {
            console.log(e);
            return res.status(400).send(e);
        }
        return res.status(200).send('OK');
    });
}

export default {
    uploadImage,
    createImageResult
};