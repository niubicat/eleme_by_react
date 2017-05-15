import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './store/store';
import Bundle from '../bundle';
import App from './App';

// 引入组件
import Header from './components/Header/Header';
import Goods from './components/Goods/Goods';
import Seller from './components/Seller/Seller';
import CartControl from './components/CartControl/CartControl';
import Food from './components/Food/Food';
import Ratings from './components/Ratings/Ratings';
import Ratingselect from './components/RatingSelect/RatingSelect';
import ShopCart from './components/ShopCart/ShopCart';

const Loading = function () {
	return <div>Loading...</div>
}

const createComponent = (component) => () => (
	<Bundle load={component}>
		{(Component) => Component?<Component />:<Loading/>}
	</Bundle>
)

const history = createBrowserHistory();

class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className={`tab border-1px`}>
					<div className="tab-item">
						<Link to="/goods">goods</Link>
					</div>
					<div className="tab-item">
						<Link to="/ratings">ratings</Link>
					</div>
					<div className="tab-item">
						<Link to="/seller">seller</Link>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
    <Provider store={store}>
		<HashRouter history={history}>
			<div>
				<Main />
				<Route  exact path="/" component={App} />
				<Route  exact path="/goods" component={Goods} />
				<Route  exact path="/seller" component={Seller} />
				<Route  exact path="/ratings" component={Ratings} />
			</div>
		</HashRouter>
	</Provider>,
	document.getElementById('app')
)
