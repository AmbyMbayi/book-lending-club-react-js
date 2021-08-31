import React from 'react';
import './BookClubMembers.css';

function BookClubMembers(props) {
	return (
		<div>
			<div>
				<h3 className="Members__title">Book Club Members</h3>
				<button type="button" className="Members__title__button">
					{' '}
					Add Book
				</button>
			</div>
			<div className="Members__table">
				<input type="text" placeholder="Search.." />
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Books Borrowed</th>
							<th>Books Returned</th>
							<th>Books Suggested</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								<img src="" alt="user one" />User one
							</td>
							<td>
								<button className="status1">Available </button>
								<span>15</span>
							</td>
							<td>10</td>
							<td>5</td>
						</tr>

						<tr>
							<td>
								<img src="" alt="user two" />User two
							</td>
							<td>
								<button type="button" className="status2">
									Borrowed{' '}
								</button>
								<span>15</span>
							</td>
							<td>0</td>
							<td>15</td>
						</tr>

						<tr>
							<td>
								<img src="" alt="user three" />User three
							</td>
							<td>
								<button type="button" className="status1">
									Available{' '}
								</button>
								<span>15</span>
							</td>
							<td>10</td>
							<td>5</td>
						</tr>

						<tr>
							<td>
								<img src="" alt="user four" />User four
							</td>
							<td>
								<button type="button" className="status2">
									Borrowed{' '}
								</button>
								<span>15</span>
							</td>
							<td>0</td>
							<td>15</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default BookClubMembers;
