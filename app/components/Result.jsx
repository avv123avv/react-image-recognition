import React, { Component }     from 'react';
import classNames               from 'classnames/bind';

import {Col, Row, ButtonToolbar, Button} from 'react-bootstrap';

export default class Image extends Component {

    render() {
        let image = this.props.img || null;
        return (
            <Row>
                <Col md={12} style={{textAlign:"center"}}>
                    <h1>RESULTS</h1>
                    <br></br>
                    <h1>SERIAL NUMBER:</h1>
                    <h1>{this.props.serialNumber}</h1>
                    <br></br>
                    <br></br>
                    <img src={image} />
                    <ButtonToolbar>
                        <Button onClick={()=>this.props.wrongResult()}>WRONG</Button>
                        <Button onClick={()=>this.props.goodResult()}>APPROVE</Button>
                    </ButtonToolbar>
                </Col>
            </Row>
        );
    }
};