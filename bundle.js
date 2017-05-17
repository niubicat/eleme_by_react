import React, { Component } from 'react';
/**
 * // 代码分割模型，调用该模型的方式如下。
 * // import SearchContainer from 'bundle-loader?lazy!./containers/Search/searchContainer';
 * // const Search = () => (
 * // <Bundle load={SearchContainer}>
 * // {(Search) => <Search />}
 * //</Bundle>)
 */


class Bundle extends Component {
	state = {
	// short for "module" but that's a keyword in utils, so "mod"
	mod: null
	}

	componentWillMount() {
		this.load(this.props)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps)
		}
	}

	load(props) {
		this.setState({
		mod: null
		})

		props.load((mod) => {
			this.setState({
				// handle both es imports and cjs
				mod: mod.default ? mod.default : mod
			})
		})
	}

	render() {
		return this.state.mod ? this.props.children(this.state.mod) : null
		}
	}

export default Bundle


