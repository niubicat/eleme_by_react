import React, { Component, PropTypes } from 'react';

import * as styles from './ratingselect.less';

export default class Ratingselect extends Component {
	static PropTypes = {
		ratings: PropTypes.array.isRequired，
		selectType: ProTypes.number.isRequired，
		onlyContent: ProTypes.boolean.isRequired，
		desc: ProTypes.object.isRequired
	}

	static defaultProps ={
		POSITIVE: 0,
		NEGATIVE: 1,
		ALL: 0,
		ratings: [].
		selectType: ALL,
		onlyContent: false,
		desc: {
			all: '全部'，
			positive: '满意'，
			negative: '吐槽'
		}
	}

	constructor(props) {
		super(props);

	}

	positives() {
		return this.ratings.filter((rating) = > {
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
					<span className={`block positive {selectType === 0 ? 'active' : ''}`} onClick={this.select(0, event)}
						{this.desc.positive}
						<span className="count">{this.positives.length}</span>
					</span>
					<span className={`block negative`} @click="select(1, $event)"
					:class="{'active': selectType === 1}">{{desc.negative}}
						<span class="count">{{nagatives.length}}</span>
					</span>
				</div>
				<div class="switch" @click="toggleContent( $event)" :class="{'on':onlyContent}">
					<i class="iconfont icon-gou"></i>
					<span class="text">只看有内容的评价</span>
				</div>
			</div>
		)
	}

}



