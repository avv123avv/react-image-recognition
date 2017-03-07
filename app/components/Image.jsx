import React, { Component }     from 'react';
import classNames               from 'classnames/bind';

import {Col, Row, ButtonToolbar, Button} from 'react-bootstrap';

export default class MobileCheck extends Component {

    render() {
        console.log('Image this.props', this.props)
        let image = this.props.img || null;
        return (
            <Row>
                <Col md={12}>
                    <h1 style={{textAlign:"center"}}>IS IT GOOD ENOUGH</h1>
                    <img src={image} />
                    <ButtonToolbar>
                        <Button onClick={()=>this.props.retakeImage()}>RETAKE IMAGE</Button>
                        <Button onClick={()=>this.props.goToCrop()}>NEXT</Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        );
    }
};