import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCategories } from '../../../actions/categories';
import { Link } from 'react-router-dom';

import './categories.css';
import { Sidebar } from '../../layouts';

export class Categories extends Component {
	componentDidMount() {
		this.props.getCategories();
	}

	render() {
		const { categories } = this.props;
		console.log('categories', categories);
		return (
			<div className="page__container">
				<Sidebar />
				<div className="categories__page">
					<h2>Book Club categories</h2>
					<div className="categories__list">
						<Link className="category-add__button" to="/addcategory">
							Add category
						</Link>
						<input className="category__search" type="text" placeholder="search" />

						{categories.map((category) => (
							<div key={category.id}>
								<li className="category__item">
									<Link to={`/categories/view/${category.id}`}>{category.name} </Link>
								</li>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categories.categories
});

export default connect(mapStateToProps, { getCategories })(Categories);
