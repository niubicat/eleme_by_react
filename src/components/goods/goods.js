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
            toto: 0,
            allfoods: [],
            goodsall: [],
            hahafoods: [],
            lolofoods: []
        }
        
        this.listHeight = [];

        this.model = 'one';

    

        this.choicekey = null;

        this.calculateHeight = this.calculateHeight.bind(this);
        this.currentIndex = this.currentIndex.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
        this.incrementTotal = this.incrementTotal.bind(this);
        this.selectFoods = this.selectFoods.bind(this);
        this.selectFood = this.selectFood.bind(this);
        this.totalNum = this.totalNum.bind(this);
        this.deleteNum = this.deleteNum.bind(this);
        
        this.choicespan = this.choicespan.bind(this);


        this.choicefoods =this.choicefoods.bind(this);
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
        // this.choicefood = event.currentTarget;
        // this.el.push(this.choicefood);
        this.setState(
            {totalCo: this.state.totalCo + 1}
        );
    }

    deleteNum(val) {
        // this.choicefood = event.currentTarget;
        // if (this.el.length !== 0) {
        // this.el.splice(this.el.lastIndexOf(this.choicefood), 1);
        if(this.state.totalCo>0){
            this.setState(
                {totalCo: this.state.totalCo-1}
            );
        }
    }

    choicespan = (e) => {
        // e.persist(); // SyntheticEvent 持久化,加上 e.persist(); 后能够输出 e.target
        e.preventDefault();
        

        if (this.state.allfoods.length == 0) {
           
            for(let i=0; i<this.props.goods.length; i++){
        
                this.state.goodsall.push(document.getElementsByClassName("food-list")[i]);
                
                for (var j = 0; j < this.props.goods[i].foods.length; j++) {
                    
                this.state.allfoods.push(this.state.goodsall[i].getElementsByClassName("icon-jia")[j]);
                
                }      
            }
        }else {
            
            this.setState({
                allfoods: [],
                goodsall: []
            });
            
            for(let i=0; i<this.props.goods.length; i++){
        
                this.state.goodsall.push(document.getElementsByClassName("food-list")[i]);
                
                for (var j = 0; j < this.props.goods[i].foods.length; j++) {
                    
                this.state.allfoods.push(this.state.goodsall[i].getElementsByClassName("icon-jia")[j]);
                
                }      
            }

        }
       
        
    }

    choicefoods(index) {
        for(let i=0; i<this.props.goods.length; i++){    
            
            for (var j = 0; j < this.props.goods[i].foods.length; j++) {
                
            this.state.hahafoods.push(this.props.goods[i].foods[j])
            
            }      
        }
        
        this.state.lolofoods.push(this.state.hahafoods[index]);
        
        console.log(this.state.lolofoods)
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
                                        <li key={i} className="food-item" data-key={i}
                                            >
                                            <div className="icon">
                                                <img alt="" src={require("../../image/foods/icon2.jpg")}style={{width: "57"}}/>
                                            </div>
                                            <div className="content">
                                                <h2 className="name">{food.name}</h2>
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
                                                    <CartControl 
                                                        choicefoods={this.choicefoods}
                                                        model={this.model} 
                                                        totalNum={this.totalNum}
                                                        deleteNum={this.deleteNum} 
                                                        goods={this.props.goods} 
                                                        increment={this.incrementTotal} 
                                                        choicespan={this.choicespan}
                                                        allfoods={this.state.allfoods}
                                                        choicefoods={this.choicefoods}
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
                    <ShopCart 
                        selectFoods={this.selectFoods()} 
                        deliveryprice={this.props.seller.deliveryPrice}
                        minprice={this.props.seller.minPrice} 
                        ref="shopCart" 
                        totalCo={this.state.totalCo}
                        choicekey={this.choicekey}
                        goods={this.props.goods}/>

                </div>
            </div>
		)
	}
}

// <Food food={this.selectedFood} ref="food" />


