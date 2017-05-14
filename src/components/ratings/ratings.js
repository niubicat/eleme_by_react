import React, { Component, PropTypes } from 'react';
import IScroll from 'IScroll';

import star from '../star/star';
import split from '../split/split';
import ratingselect from '../ratingselect/ratingselect';

import { formatDate } from '../../common/js/date';
import data from 'common/json/data.json';

import * as styles from './ratings.less';

export default class Ratings extends Component {
	static PropTypes = {
		selller: PropTypes.object.isRequired
	}

	static defaultProps = {
		ALL: 2,
		seller,
		ratings: [],
		showFlag: false,
		selectType: ALL,
		onlyContent: true,
		scroll
	}

	constructor(props) {
		super(props);
	}

	componentWillMount(data) {
		let el = React.findDOMNode(this.refs.ratings);
		this.ratings = data.ratings;
		this.scroll = new IScroll(el, {
			click: true
		});
	}

	incrementTotal(type, data) {
		let el = React.findDOMNode(this.refs.ratings);
		el.type = data;
		this.scroll.refresh();
	}

	needShow(type, text) {
		if (this.onluContent && !text) {
			return false;
		}

		if (this.selectType === ALL) {
			return true;
		}
		else {
			return type === this.selectType;
		}
	}

	formatDate() {
		let date = new Date(time);
		return formatDate(date, 'yyy-MM-dd hh:mm');
	}

	render() {
		return (
			<div className="ratings">
				<div>
					<div className="ratings-content">
						<div className="overview">
							<div className="overview-left">
								<h1 className="score">{this.seller.score}</h1>
								<div className="title">综合评分</div>
								<div className="rank">高于周边商家{this.seller.rankRate}%</div>
							</div>
							<div className="overview-right">
								<div className="score-wrapper">
									<span className="title">服务态度</span>
									<Star size={"36"} score={this.seller.serviceScore} />
									<span className="score">{this.seller.serviceScore}</span>
								</div>
								<div className="score-wrapper">
									<span className="title">商品评分</span>
									<Star size={"36"} score={this.seller.foodScore} />
									<span className="score">{this.seller.foodScore}</span>
								</div>
								<div className="delivery-wrapper">
									<span className="title">送达时间</span>
									<span className="delivery">{this.seller.deliveryTime}分钟</span>
								</div>
							</div>
						</div>
					</div>
					<Split />
					<Ratingselect  
						increment={this.incrementTotal()} 
						select-type={this.selectType} 
						only-content={this.onlyContent} 
						ratings={this.ratings} 
					/>
					<div className={`rating-wrapper border-1px`}>
						<ul>
							ratings.map((item) => {
								<li key={{ratings.indexOf(item) + 1}} className="rating-item" onClick={this.needShow(rating.rateType, rating.text)}>
									<div className="avatar">
										<img src={required("./rating.avatar")} alt="" style={{width="28" height="28"}}>
									</div>
									<div className="content">
										<h1 className="name">{this.rating.username}</h1>
										<div className="star-wrapper">
											<Star size={"24"} score={this.rating.score} />
											<span className="delivery">
												{this.rating.deliveryTime}
											</span>
										</div>
										<p className="text">{this.rating.text}</p>
										<div className="recommend">
											<i className={`iconfont icon-damuzhi`}></i>
											ratings.recommend.map((i) => {
												<span  key={{ratings.recommend.indexOf(i) + 1}} className="item">
													{this.ratings.recommend[i]}
												</span>
											});	
										</div>
										<div className="time">
											{this.rating.rateTime | this.formatDate()}
										</div>
									</div>
								</li>
							})
						</ul>
					</div>
				</div>
			</div>
		)
	}

}






