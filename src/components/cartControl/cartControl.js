import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

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

		
        this.choiceOne = null;
        this.choiceIndex = null;

		this.addChart = this.addChart.bind(this);
		this.decreaseChart = this.decreaseChart.bind(this);
		
		// this.showdata = this.showdata.bind(this);
		
	}

	// showdata(e) {
     //    console.log(this.props.food);
     //    this.props.increment(e);
	// }
	

	addChart(event) {
			event.preventDefault();

			this.setState({count: this.state.count+1}, this.props.totalNum());

			this.choiceOne = this.refs.jiajia;
			// this.choiceOne = document.getElementsByClassName("cart-add");
			// shsh.addEventListener("click", this.choicespan)
			
			this.choiceOne.setAttribute("data-aa", "gaga");
			
			this.props.choicespan(event);

			this.choiceIndex = this.props.allfoods.indexOf(this.choiceOne);
			
			this.props.choicefoods(this.choiceIndex);
	}

	decreaseChart() {
		if (this.state.count > 0) {
			this.setState({count: this.state.count-1}, this.props.deleteNum());
		}
				
	}

	



	render() {

		let modelchose = '';
		if (this.props.model == 'one') {
			
			modelchose = (
					<div className="cartControl">
						<div className="cart-decrease" onClick={() => {
							if(this.state.count>0){this.decreaseChart()}
						}}>
							<span className={`inner iconfont icon-jian`}></span>
						</div>
						<span className="cart-count">
							{this.state.count}
						</span>
						<span className={`iconfont icon-jia cart-add`} ref="jiajia" onClick={
							() => {this.addChart(event);}}></span>
					</div>
				)
		}
		else if (this.props.model == 'two') {
			modelchose = (
					<div>
						<div className="cart-decrease" onClick={this.decreaseChart}>
							<span className={`inner iconfont icon-jian`}></span>
						</div>
						<span className={`iconfont icon-jia cart-add`} onClick={
							this.choicespan
						}></span>
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

