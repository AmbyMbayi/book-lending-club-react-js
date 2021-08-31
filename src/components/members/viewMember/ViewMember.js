import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMember, deleteMember } from '../../../actions/members';
import { Link } from 'react-router-dom';

import './viewMember.css';

export class ViewMember extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getMember(id);
	}

	delete(id) {
		//eslint-disable-next-line

		this.props.deleteMember(id);
		this.props.history.push('/members');
	}

	render() {
		const { member, history, match: { params: { id } } } = this.props;

		return (
			<div className="member__page">
				<h2>Members</h2>
				<span>{member ? member.name : null}</span>
				<div className="member__action-button">
					<Link to={`/members/edit/${id}`}>Edit</Link>
				</div>
				<div>
					<button
						className="member__delete-button"
						onClick={() => {
							this.delete(id);
						}}>
						Delete
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	member: state.members.member
});

export default connect(mapStateToProps, { getMember, deleteMember })(ViewMember);
