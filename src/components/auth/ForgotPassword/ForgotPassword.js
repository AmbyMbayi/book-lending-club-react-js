import React from 'react';
import { Link } from 'react-router-dom';
import { Sidenav } from '../../layouts';
import './ForgotPassword.css';

const ForgotPassword = () => {
	return (
		<div className="body__container">
			<Sidenav />
			<div>
				<h1 className="forgotpassword__title">Reset Your Password</h1>
				<div className="forgotpassword__form">
					<form action="#">
						<div className="forgotpassword__form-group">
							<label htmlFor="password">Password</label>
							<input type="password" name="password" />
							<button type="button" className="show__button">
								show
							</button>
						</div>

						<div>
							<input type="submit" className="forgotpassword__button" value="RESET PASSWORD" />
						</div>
					</form>
					<div className="signup__link">
						<Link to="/">Have an Account? Login here</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
