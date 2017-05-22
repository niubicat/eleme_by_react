import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import * as styles from './header.less';

import { downDone } from '../../control/Seller';

// import Star from '../Star/Star';

// {this.props.seller.seller.supports.map((item, index)=><span key={index}>{item.description}</span>)}
// <span>{this.props.seller.seller.supports[0].description}</span>



export default class Header extends Component {
	static PropTypes = {
		seller: PropTypes.object.isRequired
	}

	static defaultProps = {
		haha:1221,
		seller: {
			supports:[{
				description:122
			}]
		}
	}

	constructor(props) {
		super(props);
		console.log(this.props.haha)
		this.state = {
			display: 'none',
			detailShow: false,
			down: '',
			size: 48
		}

		this.fetchItems = this.fetchItems.bind(this);	
    }

    

    fetchItems(isRefresh) {
        if (isRefresh) {
            this.props.getSellerData();
        }
    }

    componentDidMount() {
       this.fetchItems(true);
    }

	showDetail() {
        this.setState({
            detailShow: true,
            display: 'block'
        })
	}

	hideDetail() {
		this.setState({
            detailShow: false,
        	display: 'none'
		})
	}

	render() {
        const classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
		const addClass = classNames(classMap[0]);
		let fadeClass = classNames({
			'fade-enter-active': this.state.detailShow,
            'fade-leave-active': !this.state.detailShow
		});
        
        let supportslist = '';
        if (true) {

			classMap.map((item, index) => {
					return (
					<li key={index} className="support-item">
					<span className={`icon ${item}`}></span>
					<span className="text">{this.props.seller}</span>
					</li>
					)	
				}
			)
		}


		return (
			<div>
			{console.log(this.props.seller.supports)}
			<div className="header">
				<div className="content-wrapper">
					<div className="avatar">
						<img style={{width: 64, height: 64}} src={this.props.seller.avatar}/>
					</div>
					<div className="content">
						<div className="title">
							<span className="brand"></span>
							<span className="name">{this.props.seller.name}</span>
						</div>
						<div className="description">
							{this.props.seller.description}/{this.props.seller.deliveryTime}分钟送达
						</div>
						<div className="support">
							<span className={`icon ${addClass}`}></span>
							
						</div>
					</div>
					<div className="supports-count" onClick={::this.showDetail}>
						<span className="count">个</span>
						<i className={`icon iconfont icon-zuoyoujiantou`}></i>
					</div>
				</div>
				<div className="bulletin-wrapper" onClick={::this.showDetail}>
					<span className="bulletin-title"></span>
					<span className="bulletin-text">{this.props.seller.bulletin}</span>
					<i className={`icon iconfont icon-zuoyoujiantou`}></i>
				</div>
				<div className="background">

				</div>
				<div className={`detail ${fadeClass}`} onClick={::this.hideDetail} style={{display: this.state.display}}>
					<div className={`detail-wrapper clearFix`}>
						<div className="detail-main">
							<h1 className="name">{this.props.seller.name}</h1>

							<div className="title">
								<div className="line"></div>
								<div className="text">优惠信息</div>
								<div className="line"></div>
							</div>
							<ul className="supports">
								
									
								
							</ul>
							<div className="title">
								<div className="line"></div>
								<div className="text">商家公告</div>
								<div className="line"></div>
							</div>
							<div className="bulletin">
								<p className="content">{this.props.seller.bulletin}</p>
							</div>
						</div>
					</div>
					<div className="detail-close" onClick={::this.hideDetail}>
						<i className={`iconfont icon-cha`}>111</i>
					</div>
				</div>
			</div>

			</div>
		)
	}
}
