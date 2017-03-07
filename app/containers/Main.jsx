import React, { Component }                 from 'react';
import {Col, Row, ButtonToolbar, Button}    from 'react-bootstrap';
import { connect }                          from 'react-redux';
import Webcam                               from 'react-webcam';

import * as initActions                     from '../actions/initActions';
import * as cameraActions                   from '../actions/cameraActions';

import Header                               from '../components/Header';
import Image                                from '../components/Image';

import Bg from '../images/bg.jpg';
import '../css/custom.css';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    showCamera = () => {
        console.log('Show camera');
        this.props.dispatch(initActions.updateStep(2));
    }

    makePhoto = () => {
        this.props.dispatch(cameraActions.makePhoto(this.refs.webcam.getScreenshot()));
        this.props.dispatch(initActions.updateStep(3));
    }

    retakeImage = () => {
        this.props.dispatch(initActions.updateStep(2));
    }

    goToCrop = () => {
        this.props.dispatch(initActions.updateStep(4));
    }

    showStep() {
        switch(this.props.init.step) {
            case 1:
                return (
                    <Row>
                        <Col md={12} style={{textAlign:"center"}}>
                            <h1>CAPTURE THE BACK OF YOUR WATCH</h1>
                            <img src={Bg} />
                            <ButtonToolbar>
                                <Button onClick={()=>this.showCamera()}>Open Camera</Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                );
            case 2:
                return (
                    <Row>
                        <Col md={12} style={{textAlign: "center"}}>
                            <Webcam ref='webcam'/>
                            <ButtonToolbar>
                                <Button onClick={()=>this.makePhoto()}>Make photo</Button>
                            </ButtonToolbar>
                        </Col>
                    </Row>
                );
            case 3:
                return (
                    <Image
                        retakeImage={()=>this.retakeImage()}
                        goToCrop={()=>this.goToCrop()}
                        img={this.props.camera.photo}
                        />
                );
            case 4:
                return (
                    <div></div>
                );
            case 5:
                return (
                    <div></div>
                );
        }
    }

    render() {
        console.log('Main this.props', this.props);
        return (
            <div>
                <Header />
                {this.showStep()}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        init        : state.init,
        camera      : state.camera
    };
}

//connect component with global state
export default connect(mapStateToProps)(Main);