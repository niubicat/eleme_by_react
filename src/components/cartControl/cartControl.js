import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import * as styles from './cartcontrol.less';


export default class CartControl extends Component {
	static PropTypes = {
		food: PropTypes.object.isRequired,
        increment: PropTypes.func,
		count: PropTypes.number,
		model: PropTypes.bool
	}

	static defaultProps = {
        model: null
	}

	constructor(props) {
		super(props);
		
		this.state = {
			count: 0
		}

		this.addChart = this.addChart.bind(this);
		this.decreaseChart = this.decreaseChart.bind(this);
		// this.showdata = this.showdata.bind(this);
	}

	// showdata(e) {
     //    console.log(this.props.food);
     //    this.props.increment(e);
	// }
	

	addChart() {
			this.setState({
				count: this.state.count+1,
				
			});
	}

	decreaseChart() {
				this.setState({
					count: this.state.count-1
				});
	}

	render() {

		let modelchose = '';
		if (this.props.model == 'one') {
			
			modelchose = (
					<div className="cartControl">
						<div className="cart-decrease" onClick={() => {
							if(this.state.count>0){this.decreaseChart();this.props.deleteNum();}
						}}>
							<span className={`inner iconfont icon-jian`}></span>
						</div>
						<span className="cart-count">
							{this.state.count}
						</span>
						<span className={`iconfont icon-jia cart-add`} onClick={
							() => {this.addChart();this.props.totalNum();}}></span>
					</div>
				)
		}
		else if (this.props.model == 'two') {
			modelchose = (
					<div>
						<div className="cart-decrease" onClick={this.decreaseChart}>
							<span className={`inner iconfont icon-jian`}></span>
						</div>
						<span className={`iconfont icon-jia cart-add`} onClick={this.addChart}></span>
					</div>
				)
		}else if (this.props.model == 'three'){
			
			modelchose = (
					<span className="cart-count">
						
					</span>
				)
		}

		return (
			<div>
				{modelchose}
			</div>
		)
	}

}

