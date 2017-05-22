import React, { Component, PropTypes } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import IScroll, { scrollToElement } from 'iscroll/build/iscroll-probe'; // 只有这个库支持onScroll,从而支持bounce阶段的事件捕捉

import { downDone } from '../../control/Goods';

import * as styles from './goods.less';

// import ShopCart from '../ShopCart/ShopCart';
// import CartControl from '../CartControl/CartControl';
// import Food from '../Food/Food';

export default class Goods extends Component {
	static PropTypes = {
		goods: PropTypes.array.isRequired

    }

    static defaultProps = {
        listHeight: [],
        scrolly: 0,
        currentIndex: 0,
        classMap: [],
        haha:1221,
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
        console.log(this.props.goods);
        console.log(this.props.goods[0].foods)
		this.state = {
            pullDownStatus: 0,
            pullUpStatus: 0,
            down: ''
        }
        
        this.listHeight = [];

        this.itemsChanged = false;
        
        this.calculateHeight = this.calculateHeight.bind(this);
        this.currentIndex = this.currentIndex.bind(this);
        this.fetchItems = this.fetchItems.bind(this);
    }


    

    fetchItems(isRefresh) {
        if (isRefresh) {
            this.props.getGoodsData();
        }
    }

componentWillMount() {
    this.fetchItems(true);
}

    
    
    // selectFoods() {
    //     let foods = [];
    //     this.goods.forEach((good) => {
    //         good.foods.forEach((food) => {
    //             if (food.count) {
    //                 foods.push(food);
    //             }
    //         });
    //     });
    //     return foods;
    // }

// this.scrolly = Math.abs(Math.round(pos.y)); // 取最近的整数，再取绝对值

    componentDidMount() {
            console.log(this.props.goods)
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
                this.scrolly = Math.abs(Math.round(this.foodiScrollInstance.y));
                this.currIndex = this.currentIndex();
                console.log(this.currIndex)
            });

            
    }


    // menuonScroll() {
    //     console.log(this.menuiScrollInstance.y);
    // }
    
    // menuonScroll() {
    //     console.log(this.menuiScrollInstance.y);
    // }


    // shouldComponentUpdate(nextProps, nextState) {
    //     // 列表发生了变化, 那么应该在componentDidUpdate时调用iscroll进行refresh
    //     this.itemsChanged = nextState.pullDownStatus !== this.state.pullDownStatus;
       
    //     return true;
    // }

    // componentDidUpdate() {
    //     // 仅当列表发生了变更，才调用iscroll的refresh重新计算滚动条信息
    //     if (this.itemsChanged) {
    //         this.menuiScrollInstance.refresh();
    //     }
    //     return true;
    // }

    //  this.selectMenu.bind(this, [index, e]) 等价于 e => this.selectMenu(this, e)
    selectMenu(index) {
        
        // let menuselect = e.target;
        // console.log(menuselect)

        // let menuindex = this.menuList.indexOf(menuselect);
        // console.log(menuindex);
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

    
   
    //
    // selectFood(food, event) {
    //     event.preventDefault();
    //
    //     this.selectedFood = food;
    //     this.refs.food.show();
    // }
    //
    // incrementTotal(e) {
    //     this.props.shopCart.drop(e.target);
    // }



  
                        
                        
                      
                                    
                               



componentWillReceiveProps() {
    this.setState({
        down: downDone
    })
                       
}

 

    render(){
       console.log(this.props.goods);
        let res = '';
        if (this.props.goods !== 'underfined') {
            res = this.props.goods.map((item, index) => {
                    return (
                        <li key={index} 
                            className={classNames({'menu-item': true, 'border-1px': true, 
                                'current': this.currIndex == {index} ? true : false})
                            } 
                            onClick={this.selectMenu.bind(this, index)}>
                            {item.name}
                        </li>
                    )
                });
        }

        console.log(this.props.goods[1].foods)
        let foodres = '';
        if (this.props.goods !== 'underfined') {
            foodres = this.props.goods.map((item, index) => (
                <li key={index} className={`food-list food-list-hook`} >
                    <h1 className="title">{item.name}</h1>
                    <ul>
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
            </div>
		)
	}
}




