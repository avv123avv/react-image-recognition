import React, { Component }     from 'react';
import classNames               from 'classnames/bind';
import ImagesUploader           from 'react-images-uploader';

import {Col, Row, ButtonToolbar, Button} from 'react-bootstrap';

import '../css/components/uploader.css';

export default class ImageUpload extends Component {

    render() {
        let image = this.props.img || null;
        return (
            <Row>
                <Col md={12} style={{textAlign:"center"}}>
                    <h1 style={{textAlign:"center"}}>IS IT GOOD ENOUGH</h1>
                    <h1 style={{textAlign:"center"}}>UPLOAD IMAGE</h1>
                    <br></br>
                    <img src={image} />
                    <ImagesUploader
                        url="https://localhost:3000/notmultiple"
                        multiple={false}
                        optimisticPreviews={true}
                        onLoadEnd={(err,response) => {
                            if (err) {
                                console.error(err);
                            } else {
                                this.props.uploadImageFunc(response);
                            }
                        }}
                    />
                    <ButtonToolbar>
                        <Button bsSize="large" onClick={()=>this.props.goToCrop()}>NEXT</Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        );
    }
};