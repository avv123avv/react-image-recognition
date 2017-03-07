import React, { Component }     from 'react';
import classNames               from 'classnames/bind';
import Cropper                  from 'react-cropper';

import {Col, Row, ButtonToolbar, Button} from 'react-bootstrap';

import '../css/components/cropper.css';

export default class SerialNumberCropper extends Component {

    render() {
        let image = this.props.img || null;

        return (
            <Row>
                <Col md={12} style={{textAlign:"center"}}>
                    <h1 style={{textAlign:"center"}}>REFERENCE NUMBER</h1>
                    <p style={{textAlign:"center"}}>focus on the reference number</p>
                    <p style={{textAlign:"center"}}>such as XYZ.TDD.BRR</p>
                    <Cropper
                        ref='cropper'
                        src={image}
                        style={{height: '100%', width: '100%'}}
                        aspectRatio={16 / 9}
                        guides={false}/>
                    <ButtonToolbar>
                        <Button onClick={()=>this.props.retakeImage()}>RETAKE IMAGE</Button>
                        <Button onClick={()=>this.props.goToProcessing(this.refs.cropper)}>NEXT</Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        );
    }
};