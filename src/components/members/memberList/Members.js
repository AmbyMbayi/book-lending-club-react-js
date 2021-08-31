import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMembers } from '../../../actions/members';
import { Link } from 'react-router-dom';

import './member.css';
import { Sidebar } from '../../layouts';
import profile from '../../../images/profile.png';

export class Members extends Component {
	componentDidMount() {
		this.props.getMembers();
	}

	render() {
		const { members } = this.props;
		console.log('members', members);
		return (
			<div className="page__container">
				<Sidebar />
				<div className="members__page">
					<h2>Book Club Members</h2>
					<div className="members__list">
						<Link className="member-add__button" to="/addmember">
							Add Member
						</Link>
						<input className="member__search" type="text" placeholder="search" />
						<table>
							<thead>
								<tr>
									<td />
									<td>Name</td>
									<td>Contact</td>
								</tr>
							</thead>
							<tbody>
								{members.map((member) => (
									<tr key={member.id}>
										<td>
											<img src={profile} alt="" />
										</td>
										<td>
											<Link to={`/members/view/${member.id}`}>{member.name} </Link>
										</td>
										<td>{member.contact}</td>
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
	members: state.members.members
});

export default connect(mapStateToProps, { getMembers })(Members);
