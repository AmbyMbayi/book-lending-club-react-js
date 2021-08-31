import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory, deleteCategory } from '../../../actions/categories';
import { Link } from 'react-router-dom';

import './viewCategory.css';

export class ViewCategory extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getCategory(id);
	}

	render() {
		const { category, history, match: { params: { id } } } = this.props;

		return (
			<div className="category__page">
				<h2>Category</h2>
				<span>{category ? category.name : null}</span>
				<div className="books__action-button">
					<button
						className="category__delete-button"
						onClick={() => {
							//eslint-disable-next-line
							if (confirm('Are you sure you want to delete this category?')) {
								this.props.deleteCategory(id);
								history.push('/categories');
							}
						}}>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	category: state.categories.category
});

export default connect(mapStateToProps, { getCategory, deleteCategory })(ViewCategory);
