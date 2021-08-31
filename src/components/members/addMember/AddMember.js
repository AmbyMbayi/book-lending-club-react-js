import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMember } from '../../../actions/members';

import './addMember.css';

export class AddMember extends Component {
	state = {
		user_name: '',
		user_email: '',
		name: '',
		contact: ''
	};
	componentWillReceiveProps(nextProps) {
		console.log('next props', nextProps);
		const { user_name, user_email } = this.state;
		if (nextProps.auth && nextProps.user.name !== user_name) {
			this.setState({ user_name: nextProps.user.name });
		}
		if (nextProps.auth && nextProps.auth.email !== user_email) {
			this.setState({ user_name: nextProps.auth.email });
		}
	}

	onChange = (e) => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const { user_name, user_email, name, contact } = this.state;
		const member = { user_name, user_email, name, contact };
		console.log('members', member);
		//this.props.addMember(member);

		this.setState({});
		//this.props.history.push('/members');
	};
	render() {
		const { user_name, user_email, name, contact } = this.state;
		const { user } = this.props.auth;

		console.log('current user', user.name);
		return (
			<div className="member__page">
				<h2>Add Member</h2>
				<form action="" onSubmit={this.onSubmit} className="member__form">
					<div className="member__form-group">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" value={name} onChange={this.onChange} />
					</div>
					<div className="member__form-group">
						<label htmlFor="contact">Contact</label>
						<input type="text" name="contact" value={contact} onChange={this.onChange} />
					</div>
					<button type="submit" className="member__button">
						save
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { addMember })(AddMember);
