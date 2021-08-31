import React, { Component, Fragment } from 'react';
import './Navbar.css';
import { ReactComponent as UserIcon } from '../../icons/userIcon.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { logout } from '../../../actions/auth';

export class Navbar extends Component {
	state = {
		isLogoutShown: false
	};

	toggleLogoutVisibility = () => {
		const { isLogoutShown } = this.state;
		this.setState({ isLogoutShown: !isLogoutShown });
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;
		const { isLogoutShown } = this.state;
		console.log('user', user);

		const authLinks = (
			<Fragment>
				<div>
					<ul className="nav__list">
						<li className="nav__item">
							<Link to="/" className="nav__link">
								Home
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/books" className="nav__link">
								Books
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/members" className="nav__link">
								Members
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<p className="user">
						<UserIcon className="user__icon" onClick={this.toggleLogoutVisibility} />
					</p>
					<div />
					{isLogoutShown ? (
						<div className="user__info">
							<div className="user__name">
								<Link to="/userinformation">{user ? user.name : ''}</Link>
							</div>

							<div className="user__logout">
								<p onClick={this.props.logout}>Logout</p>
							</div>
						</div>
					) : null}
				</div>
			</Fragment>
		);
		const guestLinks = (
			<div>
				<ul className="nav__list">
					<li className="nav__item">
						<Link to="/signup" className="nav__link">
							Register
						</Link>
					</li>
				</ul>
			</div>
		);

		return (
			<header className="header">
				<nav className="nav">
					<p className="nav__logo">BOOKCLUB</p>

					{isAuthenticated ? authLinks : guestLinks}
				</nav>
			</header>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});
export default connect(mapStateToProps, { logout })(Navbar);
