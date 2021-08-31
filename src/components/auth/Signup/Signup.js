import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Sidenav } from '../../layouts';
import './Signup.css';
import { register } from '../../../actions/auth';
import { connect } from 'react-redux';
import { createMessage } from '../../../actions/messages';
import PropTypes from 'prop-types';

export class Signup extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		isPasswordShown: false
	};
	static propTypes = {
		register: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
	};

	togglePasswordVisibility = () => {
		const { isPasswordShown } = this.state;
		this.setState({ isPasswordShown: !isPasswordShown });
	};
	onSubmit = (e) => {
		e.preventDefault();
		const { name, email, password } = this.state;
		const newUser = {
			name,
			email,
			password
		};
		this.props.register(newUser);
	};
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to="/books" />;
		}
		const { name, email, password } = this.state;
		const { isPasswordShown } = this.state;
		return (
			<div className="body__container">
				<Sidenav />
				<div>
					<h1 className="signup__title">SIGN UP HERE</h1>
					<div className="signup__form">
						<form onSubmit={this.onSubmit}>
							<div className="signup__form-group">
								<label htmlFor="name">Name</label>
								<input type="text" name="name" value={name} onChange={this.onChange} required />
							</div>
							<div className="signup__form-group">
								<label htmlFor="email">Email</label>
								<input type="email" name="email" value={email} onChange={this.onChange} required />
							</div>
							<div className="signup__form-group">
								<label htmlFor="password">Password</label>
								<input
									type={isPasswordShown ? 'text' : 'password'}
									name="password"
									value={password}
									onChange={this.onChange}
								/>
								<button type="button" className="show__button" onClick={this.togglePasswordVisibility}>
									show
								</button>
							</div>

							<div>
								<input type="submit" className="signup__button" value="SIGN UP" />
							</div>
						</form>
						<div className="signup__link">
							<Link to="/">Have an Account? Login here</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { register, createMessage })(Signup);
