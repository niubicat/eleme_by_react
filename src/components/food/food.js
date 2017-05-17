import React, { Component, PropTypes } from 'react';
import IScroll from 'iscroll'; // 引入iscroll

import Split from '../Split/Split';
import RatingSelect from '../RatingSelect/RatingSelect';
import CartControl from '../CartControl/CartControl';

import { formatDate } from '../../common/utils/date';

import * as  styles from './food.less';

export default class Food extends Component {
	static PropTypes = {
		food: PropTypes.object.isRequired
	}

	static defaultProps ={
		showFlag: false,
		selectType: 0,
		onlyContent: true,
		desc: {
			all: '全部',
			positive: '推荐',
			negative: '吐槽'
		}
	}

	show(event) {
		this.showFlag = true;
		this.selectType = ALL;
		this.onlyContent = true;

		if (!this.props.scroll) {
			this.scroll = new IScroll(event.target, {
				click: true
			})
		}
		else {
			this.scroll.refresh();
		}
	}

	incrementTotal() {
		this.scroll.refresh();
	}

	hide() {
		this.showFlag = false;
	}

	addFirst(event) {
		if (!event) { return; }

		this.food = {
			count: 1
		}
	}

	needShow(type, text) {
		if (this.onlyContent && !text) {
			return false;
		}

		if (this.selectType === ALL) {
			return true;
		}
		else {
			return type === this.selectType;
		}
	}

	formatDate(time) {
		let date = new Date(time);
		return formatDate(date, 'yyyy-MM-dd hh:mm');
	}

	render() {
		return (
			<div className="food">
				<div className="fond-content">
					<div className="image-header">
						<img  alt="" />
						<div className="back" onClick={this.hide()}>
							<i className={`iconfont icon-weibiaoti6-copy`}>1</i>
						</div>
					</div>
					<div className="content">
						<h1 className="title">{this.food.name}</h1>
						<div className="detail">
							<span className="sell-count">月售{this.food.sellCount()}份</span>
							<span className="rating">好评率{this.food.rating()}%</span>
						</div>
						<div className="price">
							<span className="now">￥{this.food.price}</span>
							<span className="old">￥{this.food.oldPrice}</span>
						</div>
						<div className="cartControl-wrapper">
							<CartControl food={this.food} />
						</div>
						<div className="buy" onClick={event.preventDefault && this.addFirst(event)}>
							加入购物车
						</div>
					</div>
					<Split />
					<div className="info">
						<h1 className="title">商品信息</h1>
						<p className="text">{this.food.info}</p>
					</div>
					<Split />
					<div className="rating">
						<h1 className="title">商品评价</h1>
						<Ratingselect
							increment={this.incrementTotal()}
							select-type={this.selectType}
							only-content={this.onlyContent}
							desc={this.desc}
							ratings={this.food.ratings}
						/>
						<div className="rating-wrapper">
						<ul>
							<li className={`rating-item border-1px`}>
								<div className="user">
									<span className="name">{this.rating.username}</span>
									<img className="avatar" style={{width: 12, height: 12}}  alt="" />
								</div>
								<div className="time">{this.rating.rateTime || this.formatDate()}</div>
									<p className="text">
										<i className={
											`iconfont {this.rating.rateType == 0 ? 'icon-damuzhi' : ''}
											{rating.rateType == 1 ? 'icon-down' : ''}`} >
										</i>
										{this.rating.text}
									</p>
							</li>
						</ul>
						<div className="no-rating"></div>
					</div>
					</div>
				</div>
			</div>
		)
	}
}
