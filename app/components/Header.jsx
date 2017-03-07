import React, { Component }     from 'react';
import {Col, Row}               from 'react-bootstrap';

export default class Header extends Component {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <p style={{textAlign:"center"}}>WATCH DETECTOR</p>
                    <p style={{textAlign:"center"}}>- ALPHA -</p>
                </Col>
            </Row>
        );
    }
};