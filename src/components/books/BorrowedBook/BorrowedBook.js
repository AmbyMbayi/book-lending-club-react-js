import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBorrowBookInfo } from '../../../actions/borrowInfo';
import { Link } from 'react-router-dom';
import bookOne from '../../../images/book-1.jpg';
import profile from '../../../images/profile.png';

import './BorrowedBook.css';
import { Sidebar } from '../../layouts';

export class BorrowedBook extends Component {
	componentDidMount() {
		this.props.getBorrowBookInfo();
	}

	render() {
		const { borrowInfo } = this.props;
		console.log('borrow', borrowInfo);
		return (
			<div className="page__container">
				<Sidebar />
				<div className="books__page">
					<h2>Borrowed Books</h2>
					<div className="books__list">
						<input className="book__search" type="text" placeholder="search" />
						<table>
							<thead>
								<tr>
									<td>Name</td>
									<td>Book Title</td>
									<td>Borrowed Date</td>
									<td>Return Date</td>
									<td>Action</td>
								</tr>
							</thead>
							<tbody>
								{borrowInfo.map((bI) => (
									<tr key={bI.id}>
										<td>
											<img
												src={profile}
												alt=""
												style={{
													borderRadius: '50%'
												}}
											/>
											<span
												style={{
													marginLeft: '15px'
												}}>
												{bI.member.name}
											</span>
										</td>
										<td>
											<img src={'http://127.0.0.1:8000/' + bI.book.file_path} alt="" />
											<span
												style={{
													marginLeft: '15px'
												}}>
												{bI.book.title}
											</span>
										</td>
										<td>
											<span>{bI.borrowed_on}</span>
										</td>
										<td>
											<span>{bI.returned_on}</span>
										</td>

										<td className="books__action-button">
											<a href="#" className="edit">
												{bI.status}
											</a>
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
	borrowInfo: state.borrowInfo.borrowInfo
});

export default connect(mapStateToProps, { getBorrowBookInfo })(BorrowedBook);
