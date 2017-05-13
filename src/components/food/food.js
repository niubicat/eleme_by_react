import React, { Component, PropTypes } from 'react';
import IScroll from 'iscroll'; // 引入iscroll

import Split from '../split/split';
import Ratingselect from '../ratingselect/ratingselect';

import { formatDate } from '../../common/js/date';

export default class Food extends Component {
	static ProoTypes = {
		food: PropTypes.object.isRequired
	}

	static defaultProps ={
		showFlag: false,
		selectType: ALL,
		onlyContent: true,
		desc: {
			all: '全部'，
			positive: '推荐'，
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

	incrementTotal(type, )
}




