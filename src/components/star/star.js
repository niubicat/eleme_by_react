import React, { Component, PropTypes } from 'react';
import * as styles from './star.less';

export default class Star extends Component {
	static PropTypes = {
		size: PropTypes.number.isRequired,
		score: PropTypes.number.isRequired,
		LENGTH: PropTypes.number.isRequired,
		CLS_ON: PropTypes.string.isRequired,
		CLS_HALF: PropTypes.string.isRequired,
		CL_OFF: PropTypes.string.isRequired
	}

	static defaultProps = {
		size: 0,
		score: 0,
		LENGTH: 5,
		CLS_ON: 'on',
		CLS_HALF: 'half',
		CLS_OFF: 'off'
	}

	constructor(props){
		super(props);
		this.state = {
		}
		this.starType = this.starType.bind(this);
		this.itemClasses = this.itemClasses.bind(this);
	}

	// componentWillMount() {
	// 	const { size, score } = this.props;
	// }

	starType() {
		 return 'star-' + this.props.size;
	}

	itemClasses() {
		let spanDiv;
		let result = [];
		let score = Math.floor(this.props.score * 2) / 2;
		let hasDecimal = score % 1 !== 0;
		let integer = Math.floor(score);

		for(let i = 0; i < integer; i++) {
			result.push(CLS_ON);
		}

		if(hasDecimal) {
			result.push(CLS_HALF);
		}

		while(result.length < LENGTH) {
			result.push(CLS_OFF);
		}

		spanDiv = result.map(function(item) {
			return (
				<span className={item}></span>
			)
		});

		return spanDiv;

	}

	render() {
		return(
			<div className="star">
				<div className={`${style.star-tiem} {this.starType}`}>
					{this.itemClasses}
				</div>
			</div>
		)
	}
}







