import React, { Component }     from 'react';
import { connect }              from 'react-redux';

import * as initActions         from '../actions/initActions';

import Page                     from '../pages/Page';

import MobileCheck              from '../components/MobileCheck';
import Main                     from '../containers/Main';


class Init extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(initActions.initApplication());
    }

    componentWillReceiveProps(newProps) {
    }

    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle() {
        return 'Init page | Image recognition application';
    }

    pageMeta() {
        return [
            { name: 'description', content: 'Init page' }
        ];
    }

    pageLink() {
        return [];
    }

    render() {
        return (
            <Page {...this.getMetaData()}>
                {!this.props.init.mobile && <MobileCheck/>}
                {this.props.init.mobile && <Main/>}
            </Page>
        );
    }
}

function mapStateToProps(state) {
    return {
        init   : state.init,
    };
}

//connect component with global state
export default connect(mapStateToProps)(Init);