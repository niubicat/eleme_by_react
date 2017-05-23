import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


export default class CartControl extends Component {
	static PropTypes = {
		
	}

	static defaultProps = {
        
	}

	constructor(props) {
		super(props);
		this.state= {
			count: 0,
			totalcount:0
		}
		
		
		
	}

	count() {
		let el = this.refs.CartControl.addChart();
		this.setState({
			count: this.count.count+1,
			totalcount
		})
	}

	totalcount(e) {

	}


	render() {
		
		let modelchose = '';
		if (this.props.model == 'one') {
			console.log('Test1 render');
			modelchose = (
					<div className="cartControl">
						<div className="cart-decrease" onClick={this.decreaseChart}>
							<span className={`inner iconfont icon-jian`}></span>
						</div>
						<span className="cart-count">
							{this.state.count}
						</span>
						<span className={`iconfont icon-jia cart-add`} onClick={this.addChart}></span>
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
			console.log('Test2 render');
			modelchose = (
					<span className="cart-count">
						{this.state.count}
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

