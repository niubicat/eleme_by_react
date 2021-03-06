import React, { Component, PropTypes } from 'react';
import IScroll, { scrollToElement } from 'iscroll/build/iscroll-probe';
import classNames from 'classnames';

import CartControl from '../CartControl/CartControl';

import * as styles from './shopcart.less';


export default class ShopCart extends Component {
	static PropTypes = {
		selectFoods: PropTypes.array.isRequired,
		deliveryPrice: PropTypes.number.isRequired,
		minPrice: PropTypes.number.isRequired,
		balls: PropTypes.array.isRequired,
		drop: PropTypes.array.isRequired,
		fold: PropTypes.bool.isRequired,
		
	}

	static defaultProps = {
		selectFoods: [{price: 20, count: 2}],
		deliveryPrice: 0,
		minPrice: 0,
		drop: [],
		totalCo: 1
	}

	constructor(props) {
		super(props);
		this.state = {
			
			result: [], // 去重后的foods
			count: [] // 每样food的计数
		}

		this.fold =  true;
		this.model = 'one';

		this.totalPrice = this.totalPrice.bind(this);
		this.totalCount = this.totalCount.bind(this);
		this.listShow = this.listShow.bind(this);
		this.whatfoods = this.whatfoods.bind(this);

		this.balls = [{show: false}, {show: false}, {show: false}, {show: false}, {show: false}];
		this.dropBalls = [];
	}

	totalPrice() {
		let total = 0;
		// selectFoods是父组件属性 this.props.goods
		this.props.selectFoods.map((food) => {
			total += food.price * food.count;
		});

		return total;
	}

	totalCount() {
		let count = 0;
		this.props.selectFoods.map((food) => {
			count += food.count;
		});

		return count;
	}

	payDesc() {
		if (totalPrice === 0) {
			return `￥{this.props.minPrice}元起送`; // 父组件传递minPrice
		}
		else if (this.totalPrice < this.minPrice) {
			let diff = this.props.minPrice - this.totalPrice;
			return `还差￥{diff}元起送`;
		}
		else {
			return '去结算';
		}
	}

	payClass() {
		if (this.totalPrice < this.props.minPrice) {
			return "not-enough";
		}
		else {
			return "enough";
		}
	}

	listShow() {
		if (!this.totalCount) {
			this.fold = true;
			return;
		}

		let show = !this.fold;
		if (show) {
			if (!this.scroll) {
				this.scroll = new IScroll(this.refs.listContent);
			} else {
				this.scroll.refresh();
			}
		}

		return show;
	}

	toggleList() {
		if (!this.totalCount) { return; }
		this.fold = !this.fold;
	}

	empty() {
		if (!this.props.selectFoods) {
			return;
		}else {
            this.props.selectFoods.map((food) => {
                food.count = 0;
            });
		}
	}

	hideList() {
		this.fold = false;
	}

	pay() {
		if (this.totalPrice < this.minPrice) { return; }
		window.alert('支付' + this.totalPrice + '元');
	}

	
	whatfoods(arr) {
		
		this.state.result = [];
		this.state.count = [];
		
		for(var i=0; i<arr.length; i++){

			if(this.state.result.indexOf(arr[i]) ==-1){
				
				this.state.result.push(arr[i]);
				this.state.count.push(1);
				
			}else if(this.state.result.indexOf(arr[i]) !== -1) {
				// console.log(this.state.countresult.indexOf(arr[i]))
				this.state.count[this.state.result.indexOf(arr[i])]++
			}
		}

		console.log(this.state.result)
		console.log(this.state.count)

	}



	// var aa=[1,3,5,4,3,3,1,4]
	// function arr(arr) {
	//   var result=[], count=[];
	//   for(var i=0; i<arr.length; i++){
	//     if(result.indexOf(arr[i]) ==-1){
	//       result.push(arr[i]) 
	//       count.push(1);
	//     }else if(result.indexOf(arr[i]) !== -1) {
	//     	console.log(result.indexOf(arr[i]))
	//     	count[result.indexOf(arr[i])]++;
	//     }
	//   }
	  
	//   console.log(result)
	//   console.log(count)

	// }      
	// arr(aa)


	// drop(el) {
	// 	console.log(el);
	// 	this.balls.forEach((item) => {
	// 		if (!item.show) {
	// 			item.show = true;
	// 			item.el = el;
	// 			this.dropBalls.push(item);

	// 			return;
	// 		}
	// 	});
	// }

	// beforeEnter() {
	// 	let count = this.balls.length;
	// 	while (count--) {
	// 		let ball = this.balls[count];
	// 		if (ball.show) {
	// 			let rect = ball.el.getBoundingClientRect(); // getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
	// 			let x = rect.left - 32;
	// 			let y = -(window.innerHeight - rect.top - 32);
	// 			el.style.display = '';
	// 			el.style.webkitTransform = `translate3d(0, {y}px, 0)`;
	// 			el.style.transform = `translate3d(0, {y}px, 0)`;
	// 			let inner = el.getElementsByClassName('inner-hook')[0];
	// 			inner.style.webkitTransform = `translate3d({x}px, 0, 0)`;
	// 			inner.style.transform = `translate3d({x}px, 0, 0)`;
	// 		}
	// 	}
	// }

	// enter(el) {
	// 	this.refs.el.onChange(() => {
	// 		el.style.webkitTransform = 'translate3d(0, 0, 0)';
	// 		el.style.transform = 'translate3d(0, 0, 0)';
	// 		let inner = el.getElementsByClassName('inner-hook')[0];
	// 		inner.style.webkitTransform = 'translate3d(0, 0, 0)';
	// 		inner.style.transform = 'translate3d(0, 0, 0)';
	// 	});
	// }

	// afterEnter(el) {
	// 	let ball = this.dropBalls.shift();
	// 	if (ball) {
	// 		ball.show = false;
	// 		el.style.display = 'none';
	// 	}
	// }

// <CartControl />  <CartControl food={food} />
// 
// <div name="fade">
// // <div className={classNames({
//                     "list-mask": true, "fade-leave-active": this.fold,
//                     "fade-enter-active": !this.fold})} onClick={this.listShow}></div>
// 				</div>
// 				
// 	

	componentWillReceiveProps(nextProps, nextState) {
		
		this.whatfoods(nextProps.lolofoods);
		console.log(this.state.result)
	}

	

										
	render() {
		let selectfoodshaha = '';
		
		if (this.state.result.length !== 0) {
			selectfoodshaha = this.state.result.map((food, index) => {
				return (
					<li key={index} className="shopcart-food">
						<span className="name">{food.name}</span>
						<div className="price"><span>￥{food.price * this.state.count[index]}</span></div>
						<div className="cartControl-wrapper">
							<CartControl 
							model={this.model}

							choicefoods={this.props.choicefoods}
                            totalNum={this.props.totalNum}
                            deleteNum={this.props.deleteNum} 
                            goods={this.props.goods} 
                            increment={this.props.incrementTotal} 
                            choicespan={this.props.choicespan}
                            allfoods={this.props.allfoods}
                            choicefoods={this.props.choicefoods}
                            {...this.props}/>
						</div>
					</li>
				)

			})	
		}else {
			selectfoodshaha = (<div></div>)
		}

		return (
			<div>
				<div className="shopCart">
					<div className="content" onClick={this.toggleList(event)}>
						<div className="content-left">
							<div className="logo-wrapper">
								<div className={`logo {totalCount > 0 ? 'highlight' : ''}`}>
									<i className={`iconfont icon-gouwuche {totalCount > 0 ? 'highlight' : ''}`}></i>
								</div>
								
								<div className="num">
									<div >{this.props.totalCo}</div>
								</div>
								
							</div>
							<div className={`price {totalPrice > 0 ? 'highlight' : ''}`}>
								￥{this.totalPrice}
							</div>
							<div className="desc">另需配送费￥{this.deliveryPrice}元</div>
						</div>
						<div className="content-right"
							onClick={this.pay}>
							<div className={`pay {'payClass' ? 'payClass' : ''}`}>
								{this.payDesc}
							</div>
						</div>
					</div>
					<div className="ball-container">
						{
							this.balls.map((item, index) => {
								<div key={index}>
									<div onClick={this.beforeEnter}>
										if (item.show) {
											<div className="ball">
												<div className={`inner inner-hook`}>
												</div>
											</div>
										}
									</div>
								</div>
							})
						}
					</div>
					<div name="fade">
						<div className={classNames({
								"shopcart-list": true, "fade-leave-active": this.fold,
                            	"fade-enter-active": !this.fold})} onClick={this.listShow}>
							<div className="list-header">
								<h1 className="title">购物车</h1>
								<span className="empty" onClick={::this.empty}>清空</span>
							</div>
							<div className="list-content" ref="listContent">
								<ul>
									{selectfoodshaha}
								</ul>	
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
		)
	}

}





