import ocr                      from 'cognitive-vision-ocr';
import { polyfill }             from 'es6-promise';
import cognitiveVisionOcrConfig from '../config/cognitiveVisionOcrConfig';

import Image                    from '../models/image';

polyfill();

/**
 * POST /recognizeImage
 * Use Microsoft Cognitive Services Vision OCR Client to recognize the image
 * @param req
 * @param res
 */
export function recognizeImage(req, res) {
    if(req.body.image && req.body.image.secure_url) {
        console.log('cognitiveVisionOcrConfig.key',cognitiveVisionOcrConfig.key);
        ocr({
            key:        cognitiveVisionOcrConfig.key,
            image:      req.body.image.secure_url,
            gcloud:     true,
            imageSize: {
                width:  req.body.image.width,
                height: req.body.image.height
            }
        }).then((data) => {
            let description;
            if(data[1].responses[0].textAnnotations) {
                //parse the returned result
                data[1].responses[0].textAnnotations.map((obj) => {
                   if(!description && obj.description)
                       description = obj.description;
                });
            }
            // console.log('ocr',description);
            return res.json({
                result:description,
                status:200
            });
        }).catch((e) => {
            res.status(500).send(e);
        });
    } else
        return res.status(500).send('UploadImage error!');
}

export default {
    recognizeImage
};