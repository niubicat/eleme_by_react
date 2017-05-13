import React, { Component, PropTypes } from 'react';
import BScroll from 'better-scroll';

import Star from '../star/star';
import Split from '../split/split';
import { savaToLocal, loadFromlLocal } from '../../common/js/store';

export default class Seller extends Component {
	static PropTypes = {
		seller: PropTypes.object.isRequired
	}

	static defaultProps = {
		seller
	}

	constructor(props) {
		super(props);

	}
}