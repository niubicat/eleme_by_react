import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import IScroll, { scrollToElement } from 'iscroll';

import ShopCart from '../ShopCart/ShopCart';
import CartControl from '../CartControl/CartControl';
import Food from '../Food/Food';

import data from '../../common/json/data.json';

export default class Goods extends Component {
	static PropTypes = {
		seller: PropTypes.object.isRequired
	}

	static defaultProps = {
		goods: [],
		listHeight: [],
		scrolly: 0,
		selectedFood: {},
		classMap: [],
		menuScroll: {},
		foodScroll: {}
	}

	constructor(props) {
		super(props);
	}

	componentWillMout(data) {
		this.goods = this.data.goods;
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
	}

	currentIndex() {
		let listLenght = this.listHeight.length;
		for (let i = 0; i < listLenght; i++) {
			let height = this.listHeight[i];
			let height2 = this.listHeight[i + 1];

			if (!height2 || (this.scrolly >= height && this.scrolly < height2)) {
				return i;
			}
		}

		return 0;
	}

	selectFoods() {
		let foods = [];
		this.goods.forEach((good) => {
			good.foods.forEach((food) => {
				if (food.count) {
					foods.push(food);
				}
			});
		});
		return foods;
	}

	initScroll() {
		this.menuScroll = new IScroll(this.refs.menuWrapper, {
			click: true
		});

		this.foodScroll = new IScroll(this.refs.foodWrapper, {
			probeType: 3,
			click: true
		});

		tis.foodScroll.addEventListener('scroll', (pos) => {
			this.scrolly = Math.abs(Math.round(pos.y));
		});
	}

	calculateHeight() {
		let foodList = React.findDOMNode(this.refs.foodWrapper);
		let height = 0;

		this.listHeight.push(height);

		foodList.map((item) => {
			height += item.clientHeight;
			this.listHeight.push(height);
		})
	}

	selectMenu(index, event) {
		if (!event) { return; }

		let foodList = React.findDOMNode(this.refs.foodWrapper);
		let el = foodList[index];

		this.foodScroll.scrollToElement(el, 300);
	}

	selectFood(food, event) {
		if (!event) { return; }

		this.selectedFood = food;
		this.refsf.food.show();
	}

	incrementTotal(target) {
		this.props.shopCart.drop(target);
	}


	render() {
		return (
			<div className="good">
				<div className="menu-wrapper" ref="menuWrapper">
					<ul>
						this.goods.map((item) => {
							<li className={
								`menu-item border-1px {currentIndex == index ? 'current' : ''}`}
								onClick={this.selectMenu(index, event)}>
								<span className="text">
									<span className={`icon {item.type > 0 ? 'show' : ''} {this.classMap[item.type]}`}></span>
									{item.name}
								</span>
							</li>
						})
					</ul>
				</div>
				<div className="foods-wrapper" ref="foodWrapper">
					<ul>
						this.goods.map((item, index) => {
							<li key={index} className={`food-list food-list-hook`}>
								<h1 className="title">{item.name}</h1>
								<ul>
									if (food in item.foods) {
										<li className="food-item" onClick={this.selectFood(food, event)}>
											<div className="icon">
												<img  alt="" style={{width: "57px"}} />
											</div>
											<div className="content">
												<h2 className="name">{this.food[item].name}</h2>
												<p className="desc">{this.food[item].description}</p>
												<div className="extra">
													<span className="count">月售{this.food[item].sellCount}}</span>
													<span className="count">好评{this.food[item].rating}</span>
												</div>
												<div className="price">
													<span className="now">￥{this.food[item].price}</span>
													<span className="old">￥{this.food[item].oldPrice}</span>
												</div>
												<div className="cartControl-wrapper">
													<CartControl food={this.food} increment={this.incrementTotal()} />
												</div>
											</div>
										</li>
									}
								</ul>
							</li>
						})

					</ul>
				</div>
				<div>
					<ShopCart
						select-foods={this.selectFoods()}
						delivery-price={this.seller.deliveryPrice}
						min-price={this.seller.minPrice} ref={`shopCart`}
					/>
					<Food food={this.selectedFood()} ref={`food`}/>
				</div>
			</div>
		)
	}
}
