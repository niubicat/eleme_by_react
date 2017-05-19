import React, { Component, PropTypes } from 'react';


import AppContainer from './containers/AppContainer';
import Goods from './components/Goods/Goods';

import './App.less';

import './common/styles/rest.css';

export default class App extends Component {

	render() {
		return (
			<div>
				<AppContainer />
			</div>
		)
	}
}
