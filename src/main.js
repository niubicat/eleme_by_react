import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './store/indexStore';
import Bundle from '../bundle';


// 引入组件
import App from './App';

const Loading = function () {
	return <div>Loading...</div>
}

const createComponent = (component) => () => (
	<Bundle load={component}>
		{(Component) => Component?<Component />:<Loading/>}
	</Bundle>
)

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
		<HashRouter history={history}>
			<div>
				<Route exact path="/" component={App} />
			</div>
		</HashRouter>
	</Provider>,
	document.getElementById('app')
)



