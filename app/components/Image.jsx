import React, { Component }     from 'react';
import classNames               from 'classnames/bind';

import {Col, Row, ButtonToolbar, Button} from 'react-bootstrap';

export default class Image extends Component {

    render() {
        let image = this.props.img || null;
        return (
            <Row>
                <Col md={12} style={{textAlign:"center"}}>
                    <h1 style={{textAlign:"center"}}>IS IT GOOD ENOUGH</h1>
                    <img src={image} />
                    <ButtonToolbar>
                        <Button bsSize="large" onClick={()=>this.props.retakeImage()}>RETAKE IMAGE</Button>
                        <Button bsSize="large" onClick={()=>this.props.goToCrop()}>NEXT</Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        );
    }
};