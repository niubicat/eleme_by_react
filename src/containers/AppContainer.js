/**
 * Created by aaron on 16/05/2017.
 */


import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getSellerData } from '../control/Seller';
import { getGoodsData } from '../control/Goods';
import { getRatingsData } from '../control/Ratings';
import { FoodsCount } from '../control/FoodsCount';


import Header from '../components/Header/Header';
import Goods from '../components/Goods/Goods';

class AppContainer extends Component {

    constructor(props) {
        super(props);     
    }

    render() {
        return (
            <div>
                <Header {...this.props} />
                <div className="tab border-1px">
                    <div className="tab-item">
                        <Link to="/goods">
                        商品
                        </Link>
                    </div>
                    <div className="tab-item">
                        <Link to="/ratings">
                        评论
                        </Link>
                    </div>
                    <div className="tab-item">
                        <Link to="/seller">
                        商家
                        </Link>
                    </div>
                </div>
                <Goods {...this.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { seller, ratings, count } = state;
    const { goods } = state.goods;

    

    return {
        seller,
        goods,
        ratings,
        count
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSellerData: getSellerData,
        getGoodsData: getGoodsData,
        getRatingsData: getRatingsData,
        FoodsCount: FoodsCount,
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);