import React, { Component, PropTypes } from 'react';

export default class Avatar extends Component {
	static PropTypes = {
		seller: PropTypes.object.isRequired
	}

	static defaultProps = {
		seller:{
			seller: {
				avatar: null,
				name: null,
	            description: null,
	            deliveryTime: 1,
	            score: 1,
	            serviceScore: 1,
	            foodScore: 1,
	            supports: [
	                {
	                    type: 0,
	                    description: 112
	                },
	                {
	                    type: 1,
	                    description: 11212
	                },
	                {
	                    type: 2,
	                    description: 112123
	                },
	                {
	                    type: 3,
	                    description: 11243
	                },
	                {
	                    type: 4,
	                    description: 11223
	                }
	            ]    
			}
		}
			
	}

	render() {
	 	return(
	 		)
	}
}