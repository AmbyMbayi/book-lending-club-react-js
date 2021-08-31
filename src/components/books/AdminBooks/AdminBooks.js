import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks, deleteBook } from '../../../actions/books';
import { Link } from 'react-router-dom';
import bookOne from '../../../images/book-1.jpg';

import './AdminBooks.css';
import { Sidebar } from '../../layouts';

export class AdminBooks extends Component {
	componentDidMount() {
		this.props.getBooks();
	}

	render() {
		const { books } = this.props;
		console.log('books', books);
		return (
			<div className="page__container">
				<Sidebar />
				<div className="books__page">
					<h2>Book List</h2>
					<div className="books__list">
						<Link className="book-add__button" to="/addbook">
							Add Book
						</Link>
						<input className="book__search" type="text" placeholder="search" />
						<table>
							<thead>
								<tr>
									<td />
									<td>Title</td>

									<td>Copies</td>
									<td>Book Category</td>
									<td>Copies Available</td>

									<td>Actions</td>
								</tr>
							</thead>
							<tbody>
								{books.map((book) => (
									<tr key={book.id}>
										<td>
											<img src={'http://127.0.0.1:8000/' + book.file_path} alt="" />
										</td>
										<td>{book.title}</td>
										<td>{book.copies}</td>

										<td>{book.category_name}</td>
										<td>10</td>
										<td className="books__action-button">
											<Link to={`/books/edit/${book.id}`} className="edit">
												Edit
											</Link>
											<Link
												onClick={() => {
													this.props.deleteBook(book.id);
												}}
												className="delete">
												Delete
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	books: state.books.books
});

export default connect(mapStateToProps, { getBooks, deleteBook })(AdminBooks);
