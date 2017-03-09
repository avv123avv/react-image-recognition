import React, { Component }     from 'react';
import classNames               from 'classnames/bind';

import {Col, Row, ButtonToolbar, Button} from 'react-bootstrap';

export default class Result extends Component {

    showRestart() {
        let image = this.props.img || null;
        if(this.props.restart)
            return <div>
                    <h2>Thank you!</h2>
                    <ButtonToolbar>
                        <Button bsSize="large" onClick={()=>this.props.restart()}>RESTART</Button>
                    </ButtonToolbar>
                </div>
        return <div>
                <img src={image} />
                <ButtonToolbar>
                    <Button bsSize="large" onClick={()=>this.props.wrongResult()}>WRONG</Button>
                    <Button bsSize="large" onClick={()=>this.props.goodResult()}>APPROVE</Button>
                </ButtonToolbar>
            </div>
    }

    render() {
        return (
            <Row>
                <Col md={12} style={{textAlign:"center"}}>
                    <h1>RESULTS</h1>
                    <br></br>
                    <h1>SERIAL NUMBER:</h1>
                    <h1>{this.props.serialNumber || "N/A"}</h1>
                    <br></br>
                    <br></br>
                    {this.showRestart()}
                </Col>
            </Row>
        );
    }
};