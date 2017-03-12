/**
 * Routes for express app
 */
import passport from 'passport';
import unsupportedMessage                           from '../db/unsupportedMessage';
import { controllers, passport as passportConfig }  from '../db';
import express                                      from 'express';
import imagesUpload                                 from 'images-upload-middleware';

const imageCloud          = controllers && controllers.imageCloud;
const imageRecognition    = controllers && controllers.imageRecognition;

export default (app) => {
    // imageCloud controller
    if (imageCloud) {
        app.post('/uploadImage', imageCloud.uploadImage)
        app.post('/createImageResult', imageCloud.createImageResult)
    } else {
        console.warn(unsupportedMessage('cloudimage routes'));
    }

    // imageRecognition controller
    if (imageRecognition) {
        app.post('/recognizeImage', imageRecognition.recognizeImage)
    } else {
        console.warn(unsupportedMessage('imageRecognition routes'));
    }

    // imagesUploader
    app.use('/static', express.static('./server/static'));
    app.post('/notmultiple',     imagesUpload(
        './server/static/files',
        '/static/files'
    ));
};
