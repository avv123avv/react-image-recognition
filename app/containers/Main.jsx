import React, { Component }                 from 'react';
import {Col, Row, ButtonToolbar, Button}    from 'react-bootstrap';
import { connect }                          from 'react-redux';
import Webcam                               from 'react-webcam';

import * as initActions                     from '../actions/initActions';
import * as cameraActions                   from '../actions/cameraActions';
import * as cloudimageActions               from '../actions/cloudimageActions';
import * as recoginitionActions             from '../actions/recoginitionActions';

import Header                               from '../components/Header';
import Image                                from '../components/Image';
import SerialNumberCropper                  from '../components/SerialNumberCropper';
import Spinner                              from '../components/Spinner';
import Result                               from '../components/Result';

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

    goToProcessing = (cropper) => {
        let image = cropper.getCroppedCanvas().toDataURL();
        this.props.dispatch(cameraActions.makeSerialNumberCrop(image));
        //@todo return after debug
        cloudimageActions.uploadImage(this.props.dispatch, image)
            .then((result)=>{
                recoginitionActions.recognizeImage(this.props.dispatch, result.image)
                .then((result)=> {
                    this.props.dispatch(initActions.updateStep(6))
            });
        });
        this.props.dispatch(initActions.updateStep(5));
    }

    wrongResult = () => {

    }

    goodResult = () => {
        let objSave = {

        };
        cloudimageActions.createImageResult(this.props.dispatch, objSave)
            .then((result)=>{
                //@todo add last logic
                //this.props.dispatch(recoginitionActions.resetSerialNumber());
                this.props.dispatch(initActions.updateStep(7))
            });
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
                            <Webcam
                                audio={false}
                                height="100%"
                                width="100%"
                                ref='webcam'/>
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
                    <SerialNumberCropper
                        retakeImage={()=>this.retakeImage()}
                        goToProcessing={(cropper)=>this.goToProcessing(cropper)}
                        img={this.props.camera.photo}
                    />
                );
            case 5:
                return (
                    <Spinner />
                );
            case 6:
                return (
                    <Result
                        wrongResult={()=>this.wrongResult()}
                        goodResult={()=>this.goodResult()}
                        img={this.props.camera.photo}
                        serialNumber={this.props.imagerecognition.number}
                    />
                );
            case 7:
                return (
                    <div></div>
                )
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
        init                : state.init,
        camera              : state.camera,
        cloudimage          : state.cloudimage,
        imagerecognition    : state.imagerecognition
    };
}

//connect component with global state
export default connect(mapStateToProps)(Main);