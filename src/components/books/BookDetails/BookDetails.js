import { Component } from 'react';
import bookOne from '../../../images/book-1.jpg';
import './BookDetails.css';
import { getBook } from '../../../actions/books';
import { borrowBook } from '../../../actions/borrowInfo';

import { connect } from 'react-redux';
export class BookDetails extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getBook(id);
		console.log('book id', id);
	}
	state = {
		book_id: '',
		member_id: 1,
		borrowed_on: '',
		returned_on: ''
	};

	componentWillReceiveProps(nextProps) {
		const { book_id, member_id } = this.state;
		if (nextProps.book && nextProps.book.id !== book_id) {
			this.setState({ book_id: nextProps.book.id });
		}
		if (nextProps.member && nextProps.member.id !== member_id) {
			this.setState({ member_id: nextProps.member.id });
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();

		const { member_id, book_id, borrowed_on, returned_on } = this.state;
		const borrowed_book = { member_id, book_id, borrowed_on, returned_on };
		console.log('book props', borrowed_book, this.props);
		this.props.borrowBook(borrowed_book);
		this.setState({});
		this.props.history.push('/books');
	};
	render() {
		const { book } = this.props;
		const { member } = this.props;
		console.log('memberss', member);

		const { borrowed_on, returned_on } = this.state;

		return book ? (
			<div className="book__details">
				<div
					className="book__image"
					style={{
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						backgroundRepeat: 'no-repeat',
						backgroundImage: `url(${'http://127.0.0.1:8000/' + book.file_path})`
					}}
				/>
				<div className="book__info">
					<h2 className="book__title">{book.title}</h2>
					<p>{book.description}</p>
					<form action="" onSubmit={this.onSubmit}>
						<div className="book__form-group">
							<label htmlFor="borrow_date">Borrow Date</label>
							<input type="date" name="borrowed_on" value={borrowed_on} onChange={this.onChange} />
						</div>

						<div className="book__form-group">
							<label htmlFor="return_date">Return Date</label>
							<input type="date" name="returned_on" value={returned_on} onChange={this.onChange} />
						</div>

						<button type="submit">Borrow</button>
					</form>
				</div>
			</div>
		) : null;
	}
}
const mapStateToProps = (state) => ({
	book: state.books.book,
	borrowInfo: state.borrowInfo.borrowInfo,
	member: state.members.member
});
export default connect(mapStateToProps, { getBook, borrowBook })(BookDetails);
