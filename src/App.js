import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Goods from './components/Goods/Goods';

export default class App extends Component {
	render() {
		return (
			<div><Goods /></div>
		)
	}
}
