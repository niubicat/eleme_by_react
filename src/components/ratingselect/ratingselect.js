import React, { Component, PropTypes } from 'react';

import * as styles from './ratingselect.less';

export default class RatingSelect extends Component {
	static PropTypes = {
		ratings: PropTypes.array.isRequired,
		selectType: PropTypes.number.isRequired,
		onlyContent: PropTypes.bool.isRequired,
		desc: PropTypes.object.isRequired
	}

	static defaultProps ={
		POSITIVE: 0,
		NEGATIVE: 1,
		ALL: 0,
		ratings: [],
		selectType: 0,
		onlyContent: false,
		desc: {
			all: '全部',
			positive: '满意',
			negative: '吐槽'
		}
	}

	constructor(props) {
		super(props);

	}

	positives() {
		return this.ratings.filter((rating) => {
			return rating.rateType === POSITIVE;
		});
	}

	nagative() {
		return this.ratings.filter((rating) => {
			return rating.rateType === NEGATIVE;
		});
	}

	select(type, event) {
		if (!event) { return; }

		this.selectType = type;
		this.props.increment(selectType, type);
	}

	toggleContent(event, nextProps) {
		if (!event) { return; }

		if (this.nextProps.onlyContent = !this.onlyContent) {
			this.props.increment(this.nextProps.onlyContent, 'onlyContent');
		}
	}

	needshow(type, text) {
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

	render() {
		return (
			<div className="ratingselect">
				<div className={`rating-type border-1px`}>
					<span className={`block positive {selectType === 2 ? 'active' : ''}`} onClick={this.select(2, event)}>
						{this.desc.all}
						<span className="count">{this.ratings.length}</span>
					</span>
					<span className={`block positive {selectType === 0 ? 'active' : ''}`} onClick={this.select(0, event)}>
					</span>
					<span className={`block negative {selectType === 1 ? 'active' : ''}`} onClick={this.select(1, event)}>
						{this.desc.negative}
						<span className="count"></span>
					</span>
				</div>
				<div className={`switch {'on' ? '' : 'on'}`} onClick={this.toggleContent(event)}>
					<i className={`iconfont icon-gou`}></i>
					<span className="text">只看有内容的评价</span>
				</div>
			</div>
		)
	}

}
