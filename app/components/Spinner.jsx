import React, { Component }     from 'react';
import ReactSpinner             from 'reactjs-spinner';

import {Col, Row, ButtonToolbar, Button} from 'react-bootstrap';

import "../css/components/reactjs-spinner.css";

export default class Image extends Component {

    render() {
        return (
            <Row>
                <Col md={12} style={{textAlign:"center"}}>
                    <h1>PROCESSING ...</h1>
                    <ReactSpinner size={140} borderColor='#f2f0f0' borderTopColor='#e60000'>Example</ReactSpinner>
                </Col>
            </Row>
        );
    }
};