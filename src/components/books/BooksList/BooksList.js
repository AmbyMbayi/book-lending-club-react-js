import './BooksList.css';

import bookOne from '../../../images/book-1.jpg';
import { Sidenav } from '../../layouts';
import { getBooks } from '../../../actions/books';

import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export class BooksList extends Component {
	state = {
		totalRecords: '',
		totalPages: 10,
		pageLimit: '',
		currentPage: 1,
		startIndex: '',
		endIndex: ''
	};
	componentDidMount() {
		//const params = new URLSearchParams(location.search);

		//const currentPage = params.get('page');

		this.props.getBooks();
	}

	render() {
		const { books } = this.props;
		console.log(books);
		return (
			<div className="body__container">
				<Sidenav />
				<div className="book__page">
					<div className="featured__books">
						<h2 className="featured__books-title">Featured Books</h2>
						<div className="featured__books-form">
							<form action="">
								<label htmlFor="sort">Sort By: </label>
								<select>
									<option value="ALL">ALL</option>
									<option value="SUGGESTED">SUGGESTED</option>
									<option value="BORROWED">BORROWED</option>
								</select>
							</form>
						</div>
						{books.map((book) => (
							<div key={book.id} className="book__card">
								<Link to={`/books/${book.id}`}>
									<div className="image__container">
										<div
											className="book__cover"
											style={{
												backgroundSize: 'cover',
												backgroundPosition: 'center center',
												backgroundRepeat: 'no-repeat',
												backgroundImage: `url(${'http://127.0.0.1:8000/' + book.file_path})`
											}}
										/>
										<h2 className="book__title">{book.title}</h2>
										<p className="book__description">{book.category_name}</p>
										<button>Borrow</button>
									</div>
								</Link>
							</div>
						))}
					</div>
					<div className="featured__books-pagination">
						<p>
							Showing {books.length} of {books.length} book(s)
						</p>
						<div className="pagination">
							<a href="#">&laquo;</a>
							<a href="#">1</a>
							<a className="active" href="#">
								2
							</a>
							<a href="#">3</a>
							<a href="#">4</a>
							<a href="#">&raquo;</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	books: state.books.books
});

export default connect(mapStateToProps, { getBooks })(BooksList);
