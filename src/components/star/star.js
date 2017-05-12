import React, { Component, PropTypes } from 'react';

export default class Star extends Component {
	static PropTypes = {
		size: PropTypes.number.isRequired,
		score: PropTypes.number.isRequired
	}

	static defaultProps = {
		size: 0,
		score: 0
	}

	constuctor(props){
		super(props);
		this.state = {
			size,
			score
		}
	}

	render() {
		return()
	}
}