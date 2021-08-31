import React, { Component } from 'react';
import './AddBook.css';

import { addBook } from '../../../actions/books';
import { getCategories } from '../../../actions/categories';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Sidebar } from '../../layouts';

export class AddBook extends Component {
	state = {
		title: '',
		description: '',
		copies: '',
		category_id: '',
		file_path: ''
	};
	componentDidMount() {
		this.props.getCategories();
	}
	handleFilePath = (e) => {
		this.setState({
			file_path: e.target.files[0]
		});
	};
	onChange = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { title, description, copies, category_id, file_path } = this.state;
		console.log('imagepath', file_path.name);
		let fd = file_path.name;
		const book = { title, description, copies, category_id, file_path: fd };
		console.log('bookaded', book);
		this.props.addBook(book);
		this.setState({});

		//this.props.history.push('/dashboard');
	};

	render() {
		const { title, description, copies, category_id } = this.state;
		const { categories } = this.props;
		//console.log('all categories', categories);
		return (
			<div className="page__container">
				<Sidebar />
				<div className="addbook__container">
					<h2 className="addbook__header">Add Book </h2>
					<div className="addbook__page">
						<div className="addbook__form">
							<form action="" onSubmit={this.onSubmit}>
								<div className="addbook__form-group">
									<label htmlFor="title">Title</label>
									<input type="text" name="title" value={title} onChange={this.onChange} />
								</div>
								<div className="addbook__form-group">
									<label htmlFor="description">Description</label>
									<textarea
										type="text"
										name="description"
										value={description}
										onChange={this.onChange}
									/>
								</div>
								<div className="addbook__form-group">
									<label htmlFor="copies">copies</label>
									<input type="text" name="copies" value={copies} onChange={this.onChange} />
								</div>
								<div className="addbook__form-group">
									<input type="file" onChange={this.handleFilePath} />
								</div>
								<div className="addbook__form-group">
									<select
										name="category_id"
										id=""
										value={category_id}
										className="select__category"
										onChange={this.onChange}>
										<option>Select category</option>
										{categories.map((category) => (
											<option key={category.id} value={category.id}>
												{category.name}
											</option>
										))}
									</select>
								</div>

								<button type="submit" className="addbook__button">
									save
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categories.categories
});
export default connect(mapStateToProps, { addBook, getCategories })(AddBook);
