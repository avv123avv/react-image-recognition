import React, { Component }     from 'react';
import classNames               from 'classnames/bind';

import {Col, Row} from 'react-bootstrap';

export default class MobileCheck extends Component {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <h1 style={{textAlign:"center"}}>PLEASE OPEN ON MOBILE</h1>
                    <p style={{textAlign:"center"}}>This page is available only</p>
                    <p style={{textAlign:"center"}}>for mobile as it requires the</p>
                    <p style={{textAlign:"center"}}>use of camera</p>
                </Col>
            </Row>
        );
    }
};