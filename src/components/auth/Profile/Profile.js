import React from 'react';
import { Sidenav } from '../../layouts';
import profile from '../../../images/profile.png';
import './Profile.css';
import { Component } from 'react';
import { connect } from 'react-redux';

export class Profile extends Component {
	state = {
		isPasswordShown: false
	};
	togglePasswordVisibility = () => {
		const { isPasswordShown } = this.state;
		this.setState({ isPasswordShown: !isPasswordShown });
	};
	render() {
		const { user } = this.props.auth;
		const { isPasswordShown } = this.state;
		console.log(user);
		return (
			<div className="body__container">
				<Sidenav />
				<div className="profile__body">
					<h3 className="profile__header">personal profile</h3>
					<div className="profile__page">
						<div
							className="profile__image"
							style={{
								backgroundSize: 'cover',
								backgroundPosition: 'center center',
								backgroundRepeat: 'no-repeat',
								backgroundImage: `url(${profile})`
							}}
						/>

						<div>
							<form className="profile__form">
								<div className="profile__form-group">
									<label htmlFor="name">Name</label>
									<input type="text" id="name" placeholder="User one" value={user.name} />
								</div>
								<div className="profile__form-group">
									<label htmlFor="name">Email</label>
									<input type="email" id="email" placeholder="Userone@gmail.com" value={user.email} />
								</div>
								<div className="profile__form-group">
									<label htmlFor="name">Password </label>
									<input
										type={isPasswordShown ? 'text' : 'password'}
										id="password"
										placeholder="*****"
									/>
									<button type="button" className="show__button">
										show
									</button>
								</div>
								<div className="profile__form-group">
									<label htmlFor="name">New Password </label>
									<input
										type={isPasswordShown ? 'text' : 'password'}
										id="password1"
										placeholder="*****"
									/>
									<button type="button" className="show__button">
										show
									</button>
								</div>

								<button type="submit" className="submit__button">
									save
								</button>
							</form>
						</div>
					</div>
					<div className="profile__links">
						<a href="#">Back to your account</a>
						<a href="#">Home</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Profile);
