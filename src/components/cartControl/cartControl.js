import React, { Component, PropTypes } from 'react';

import * as styles from 'cartControl.less';

export default class CartControl extends Component {
	static PropTypes = {
		food
	}

	static defaultProps = {
		food
	}

	constructor(props) {
		super(props);

	}

	addChart(event) {
		if(!event) {
			return; 
		}

		if (!this.food.count) {
			this.food = {
				count: 1
			}
		}
		else {
			this.food.count++;
		}

		this.props.increment();
	}

	decreaseChart(event) {
		if(!event) {
			return;
		}

		this.food.count--;
	}

	render() {
		return (
			<div className="cartControl">
				<div className="cart-decrease"  onClick={{event.preventDefault() && this.decreaseCart(event)}}>
					<span className={`inner iconfont icon-jian`}></span>
				</div>
				<span className="cart-count">
					{this.food.count}
				</span>
				<span className={`iconfont icon-jia cart-add`} onClick={{event.preventDefault() && this.addCart(event)}}></span>
			</div>
		)
	}

}



