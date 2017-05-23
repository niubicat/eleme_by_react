import React, { Component, PropTypes } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import IScroll, { scrollToElement } from 'iscroll/build/iscroll-probe'; // 只有这个库支持onScroll,从而支持bounce阶段的事件捕捉

import { downDone } from '../../control/Goods';

import * as styles from './goods.less';

import ShopCart from '../ShopCart/ShopCart';
import CartControl from '../CartControl/CartControl';
import Food from '../Food/Food';

export default class Goods extends Component {
	static PropTypes = {
		goods: PropTypes.array.isRequired

    }

    static defaultProps = {
        listHeight: [],
        scrolly: 0,
        currentIndex: 0,
        classMap: [],
        
        goods:[
            {name:12,
            foods:[12]
            },
            {name:12,
            foods:[32]
            },
            {name:12,
            foods:[43]
            }
        ]
    }


	constructor(props) {
		super(props);
      
		this.state = {
            pullDownStatus: 0,
            pullUpStatus: 0,
            down: '',
            totalCo: 0,
            toto: 0
        }
        
        this.listHeight = [];

        this.model = 'one';

        
        this.el = [];

        this.calculateHeight = this.calculateHeight.bind(this);
        this.currentIndex = this.currentIndex.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
        this.incrementTotal = this.incrementTotal.bind(this);
        this.selectFoods = this.selectFoods.bind(this);
        this.selectFood = this.selectFood.bind(this);
        this.totalNum = this.totalNum.bind(this);
        this.deleteNum = this.deleteNum.bind(this);
    }

    componentWillMount() {
        this.fetchItems(true);
    }


    componentDidMount() {
       

        const options = {
            // 默认iscroll会拦截元素的默认事件处理函数，我们需要响应onClick，因此要配置
            preventDefault: false,
            // 禁止缩放
            zoom: false,
            // 支持鼠标事件，因为我开发是PC鼠标模拟的
            mouseWheel: true,
            // 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
            probeType: 3,
            // 拖拽超过上下界后出现弹射动画效果，用于实现下拉/上拉刷新
            bounce: true,
            // 展示滚动条
            scrollbars: false,
        };

        this.menuList = this.refs.menuWrapper.getElementsByClassName('menu-item');
        this.foodList = this.refs.foodWrapper.getElementsByClassName('food-list-hook');


        this.menuiScrollInstance = new IScroll(this.refs.menuWrapper, options);
        this.menuiScrollInstance.on('scroll');



        this.foodiScrollInstance = new IScroll(this.refs.foodWrapper, options);
        this.foodiScrollInstance.on('scroll', () => {
            this.calculateHeight();  // 计算出foolmenu scroll listHeight
            this.scrolly = Math.abs(Math.round(this.foodiScrollInstance.y)); // 取最近的整数，再取绝对值
            this.currIndex = this.currentIndex();
            console.log(this.currIndex)
        });
    }

    // componentWillReceiveProps() {
    //     this.setState({
    //         down: downDone
    //     })
    //
    // }


    selectMenu(index) {

        let el = this.foodList[index];
        
        this.foodiScrollInstance.scrollToElement(el, 300);
    }

    
    
    
    calculateHeight() {
        // this.listHeight = [0, 第一元素高度， 第一、二元素总高度， ....]
        let height = 0;
        
        this.listHeight.push(height);
        console.log(this.foodList)
        for (var k = 0; k < this.foodList.length; k++) {
            height += this.foodList[k].clientHeight;
            this.listHeight.push(height);
        }
       
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


    fetchItems(isRefresh) {
        if (isRefresh) {
            this.props.getGoodsData();
        }
    }


    selectFoods() {
        let foods = [];
        this.props.goods.forEach((good) => {
            good.foods.forEach((food) => {
                if (food.count) {
                    foods.push(food);
                }
            });
        });
        return foods;
    }


    selectFood(food) {
        this.selectedFood = food;
        this.refs.food.show(); // Food组件方法
    }


    incrementTotal(e) {
        // 调用子组件shopCart方法drop
	    this.refs.shopCart.drop(e.currentTarget);
    }

    totalNum() {

                
                this.el.push(this.refs.fuck);
                this.setState({
                    totalCo: this.el.length
                });
    }

    deleteNum() {
       if (this.el.length !== 0) {
        this.el.splice(this.el.lastIndexOf(this.refs.fuck), 1);
        this.setState({
            totalCo: this.el.length
        });
       }
       console.log(this.el)
    }




    render(){

       
        let res = '';
        if (this.props.goods !== 'underfined') {
            res = this.props.goods.map((item, index) => {
                    return (
                        <li key={index} 
                            className={classNames({'menu-item': true, 'border-1px': true, 
                                'current': this.currIndex == {index}})
                            } 
                            onClick={this.selectMenu.bind(this, index)}>
                            {item.name}
                        </li>
                    )
                });

        }

        
        let foodres = '';
        if (this.props.goods !== 'underfined') {
            foodres = this.props.goods.map((item, index) => (
                <li key={index} className={`food-list food-list-hook`} >
                    <h1 className="title">{item.name}</h1>
                    <ul id="sixsixsix">
                        {
                            item.foods.map(
                                (food, i) => {
                                    return (
                                        <li key={i} className="food-item"
                                            >
                                            <div className="icon">
                                                <img alt="" src={require("../../image/foods/icon2.jpg")}style={{width: "57"}}/>
                                            </div>
                                            <div className="content">
                                                <h2 className="name" ref="fuck">{food.name}</h2>
                                                <p className="desc">{food.description}</p>
                                                <div className="extra">
                                                    <span className="count">月售{food.sellCount}}</span>
                                                    <span className="count">好评{food.rating}</span>
                                                </div>
                                                <div className="price">
                                                    <span className="now">￥{food.price}</span>
                                                    <span className="old">￥{food.oldPrice}</span>
                                                </div>
                                                <div className="cartControl-wrapper">
                                                    <CartControl model={this.model} totalNum={this.totalNum}  
                                                        deleteNum={this.deleteNum} food={food} increment={this.incrementTotal} 
                                                        {...this.props}/>
                                                </div>
                                            </div>
                                        </li>
                                   )
                               }
                            )
                        }
                    </ul>
                </li>
            ))
        }


        return (
            
            <div className="good">
            	<div className="menu-wrapper" ref="menuWrapper">
            		<ul>
                       {res}
            		</ul>
            	</div>
    			<div className="foods-wrapper" ref="foodWrapper">
    				<ul>
    					{foodres}
    				</ul>
    			</div>
                <div>
                    <ShopCart selectFoods={this.selectFoods()} deliveryprice={this.props.seller.deliveryPrice}
                    minprice={this.props.seller.minPrice} ref="shopCart" totalCo={this.state.totalCo}/>

                </div>
            </div>
		)
	}
}

// <Food food={this.selectedFood} ref="food" />


