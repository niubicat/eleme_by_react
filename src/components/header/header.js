import React, { Component, PropTypes } from 'react';
import Star from '../star/star';
import * as styles from 'header.less';

export default class Header extends Component {
	static PropTypes = {
		seller: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);

		this.state = {
			detailShow: false,
			size: 48
		}

		this.methods = this.methods.bind(this);
	}

	// componentWillReceiveProps(nextProps) {
	// 	if(nextProps.seller !== this.props.seller) {
	// 		this.setState({
	// 			detailShow: !detailShow
	// 		})
	// 	}
	// }
		
	showDetail() {
		this.detailShow = true;
	}

	hideDetail() {
		this.detailShow = false;
	}

	sellerSupports() {
		const classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		let ellerSupports = classMap.map(function(item) {
			return (
				<span className={`icon ${item}`}></span>
				<span className="text">{this.props.seller.description}</span>
			)
		})
	}

	render() {
		return (
			<div className="header">
				<div className="content-wrapper">
					<div className="avatar">
						<img style={{width="64" height="64"}} src={require("./avtar.png")}/>
					</div>
					<div className="content">
						<div className="title">
							<span className="brand"></span>
							<span className="name">{this.props.seller.name}</span>
						</div>
						<div className="description">
							{this.props.seller.description}/{this.props.seller.deliveryTime}分钟送达
						</div>
						{this.sellerSupports()}
					</div>
					<div className="supports-count" onClick={this.showDetail()}>	
						<span className="count">{this.props.supports.length}</span>
						<i className={`icon iconfont icon-zuoyoujiantou`}></i>
					</div>
				</div>
				<div className="bulletin-wrapper" onClick={this.showDetail()}>
					<span className="bulletin-title"></span>
					<span className="bulletin-text">{this.props.seller.bulletin}</span>
					<i className={`icon iconfont icon-zuoyoujiantou`}></i>
				</div>
				<div className="background">
					<img src={require("./avatar.png")} alt="" class="" style={{width="100%" height="100%"}}>
				</div>
				<div className="detail" onClick={this.hideDetail()}>
					<div className={`detail-wrapper clearFix`}>
						<div className="detail-main">
							<h1 className="name">{this.props.seller.name}</h1>
							<div className="star-wrapper">
							<Star size={this.state.size} score={this.props.seller.score} />
						</div>
						<div className="title">
							<div className="line"></div>
							<div className="text">优惠信息</div>
							<div className="line"></div>
						</div>
						<ul className="supports">
							<li className="support-item">
							<span className="icon"></span>
							{this.sellerSupports()}
							<span className="text">{this.props.seller.description}</span>
							</li>
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
					<div className="detail-close" onClick={this.hideDetail()}>
						<i className={`iconfont icon-cha`}></i>
					</div>
				</div>
			</div>
		)
	}
}