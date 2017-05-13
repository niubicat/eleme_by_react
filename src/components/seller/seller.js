import React, { Component, PropTypes } from 'react';
import IScroll from 'iscroll'; // 引入iscroll

import Star from '../star/star';
import Split from '../split/split';
import { savaToLocal, loadFromlLocal } from '../../common/js/store';
import * as styles from 'seller.less';

export default class Seller extends Component {
	static PropTypes = {
		seller: PropTypes.object.isRequired
	}

	static defaultProps = {
		seller，
		favorite,
		picScroll,
		scroll,
		classMap
	}

	constructor(props) {
		super(props);
	}

	favoriteDate() {
		return loadFromlLocal(this.props.seller.id, 'favorite', false);
	}

	favoriteText() {
		return this.favvorite ? '已收藏' ：'收藏'；
	}

	picScroll() {
		if (!this.picScroll) {
			if(this.seller.pics) {
				let picWidth = 120;
				let margin = 6;
				let width = (picWidth + margin) * this.seller.pics.length - margin;
				this.refs.picList.style.width = width + 'px';
				this.picScroll = new IScroll(this.refs.picWrapper, {
					scrollX: true,
              		eventPassthrough: 'vertical'
				})
			}
		}
		else {
			this.picScroll.refresh();
		}

		if (!this.scroll) {
			this.scroll = new IScroll(this.refs, {click: true})
		}
		else {
			this.scroll.refresh();
		}

		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

	}

	toggleFavorite(event, nextProps) {
		if (!event) { return; }
		this.nextProps.favorite !== this.favorite;
		savaToLocal(this.seller.id, 'favorite', this.nextProps.favorite);
	}

	render() {
		return (
			<div className="seller">
				<div className="seller-content">
					<div className="overview">
						<h1 className="title">{this.seller.name}</h1>
						<div className={`desc border-1px`}>
							<Star size={"36"} score={this.props.seller.score} />
							<span className="text">({this.props.seller.ratingCount()})</span>
							<span className="text">月售{{seller.sellCount}}单</span>
						</div>
						<ul className="remark">
							<li className="block">
								<h2>起送价</h2>
								<div className="content">
									<span className="stress">{this.props.seller.minPrice}</span>元
								</div>
							</li>
							<li className="block">
								<h2>商家配送</h2>
								<div className="content">
									<span className="stress">{this.props.seller.deliveryPrice()}</span>元
								</div>
							</li>
							<li className="block">
								<h2>平均配送时间</h2>
								<div className="content">
									<span className="stress">{this.props.seller.deliveryTime()}</span>元
								</div>
							</li>
						</ul>
						<div className="favorite" onClick={this.toggleFavorite(event)}>
							<i className={`iconfont icon-aixin ${{'active':favorite}}></i>
							<span>{this.favoriteText()}</span>
						</div>
					</div>
					<Split />
					<div className="bulletin">
						<h1 className="title">公告与活动</h1>
						<div className={`content-wrapper border-1px`}>
							<p className="content">{this.props.seller.bulletin}}</p>
						</div>
						<ul className="supports">
							<li className="support-item">
								<span className="icon></span>
								<span className="text">{this.props.seller.supports.description}</span>
							</li>
						</ul>
					</div>
					<Split />
					<div className="pics">
						<h1 className="title">商家实景</h1>
						<div className="pic-wrapper" ref="picWrapper">
							<ul className="pic-list" ref="picList">
								<li className="pic-item">
									<img src={require("./pic.png")} style={{width="120" height="120"}}>
								</li>
							</ul>
						</div>
					</div>
					<Split />
					<div className="info">
						<div className={`title  border-1px`}>商家信息</div>
						<ul>
							<li className="info-item">{this.props.info}</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}







