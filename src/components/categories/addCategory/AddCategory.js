import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCategory } from '../../../actions/categories';

import './addCategory.css';

export class AddCategory extends Component {
	state = {
		name: ''
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();

		const { name } = this.state;
		const category = { name };
		console.log('categories', category);
		this.props.addCategory(category);

		this.setState = {
			name: ''
		};
		this.props.history.push('/categories');
	};
	render() {
		const { name } = this.state;
		return (
			<div className="category__page">
				<h2>Add category</h2>
				<form action="" onSubmit={this.onSubmit} className="category__form">
					<div className="category__form-group">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" value={name} onChange={this.onChange} />
					</div>

					<button type="submit" className="category__button">
						save
					</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { addCategory })(AddCategory);
