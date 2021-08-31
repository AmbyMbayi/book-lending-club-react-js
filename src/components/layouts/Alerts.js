import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
	constructor(props) {
		super(props);
	}
	static propTypes = {
		error: PropTypes.object.isRequired,
		message: PropTypes.object.isRequired
	};
	componentDidUpdate(prevProps) {
		const { error, message } = this.props;

		if (error !== prevProps.error) {
			if (error.msg) this.props.alert.error(error.msg);
		}

		if (message !== prevProps.message) {
			if (message.addMember) this.props.alert.success(message.addMember);
			if (message.updateMember) this.props.alert.success(message.updateMember);
			if (message.deleteMember) this.props.alert.success(message.deleteMember);

			if (message.addBook) this.props.alert.success(message.addBook);
			if (message.updateBook) this.props.alert.success(message.updateBook);
			if (message.deleteBook) this.props.alert.success(message.deleteBook);

			if (message.addCategory) this.props.alert.success(message.addCategory);
			if (message.deleteCategory) this.props.alert.success(message.deleteCategory);

			if (message.registerUser) this.props.alert.success(message.registerUser);
			if (message.logout) this.props.alert.success(message.logout);
		}
	}
	render() {
		return <Fragment />;
	}
}
const mapStateToProps = (state) => ({
	error: state.errors,
	message: state.messages
});
export default connect(mapStateToProps)(withAlert()(Alerts));
