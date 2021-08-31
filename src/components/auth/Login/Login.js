import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Sidenav } from '../../layouts';

import './Login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

export class Login extends Component {
	state = {
		email: '',
		password: '',
		isPasswordShown: false
	};
	static propTypes = {
		login: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool
	};

	togglePasswordVisibility = () => {
		const { isPasswordShown } = this.state;
		this.setState({ isPasswordShown: !isPasswordShown });
	};

	onSubmit = (e) => {
		e.preventDefault();

		this.props.login(this.state.email, this.state.password);
	};
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to="/books" />;
		}
		const { email, password } = this.state;
		const { isPasswordShown } = this.state;

		return (
			<div className="body__container">
				<Sidenav />
				<div>
					<h1 className="login__title">Log in To your Account</h1>
					<div className="login__form">
						<form onSubmit={this.onSubmit}>
							<div className="login__form-group">
								<label htmlFor="email">Email</label>
								<input type="email" name="email" value={email} onChange={this.onChange} required />
							</div>
							<div className="login__form-group">
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
								<Link to="/forgotpassword">Forgot your password?</Link>
							</div>
							<div>
								<input type="submit" className="login__button" value="SIGN IN" />
							</div>
						</form>
						<div className="signup__link">
							<Link to="/signup">No account? Create home here</Link>
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
export default connect(mapStateToProps, { login })(Login);
