/**
 * Created by aaron on 16/05/2017.
 */


import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSellerData } from '../control/Seller';

import Header from '../components/Header/Header';

class AppContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div><Header {...this.props} /></div>
        )
    }
}

function mapStateToProps(state) {
    const { seller } = state;

    return {
        seller
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSellerData: getSellerData
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);