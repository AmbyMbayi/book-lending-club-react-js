import { Component, Fragment } from 'react';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './components/layouts/Alerts';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login, Signup, ForgotPassword, Profile, UserInformation } from './components/auth';
import {
	BooksList,
	BookDetails,
	AddBook,
	EditBook,
	BookHistory,
	BookClubMembers,
	AdminBooks,
	ViewBook,
	BorrowedBook
} from './components/books/';

import { Members, ViewMember, EditMember, AddMember } from './components/members';
import { AddCategory, Categories, ViewCategory } from './components/categories';
import { Navbar } from './components/layouts';
import { Footer } from './components/layouts';
import PageNotFound from './pages/NotFoundPage/PageNotFound';

import { Provider } from 'react-redux';
import store from './store';
import PrivateRoute from './common/PrivateRoute';
import { loadUser } from './actions/auth';

const alertOptions = {
	timeout: 3000,
	position: 'top center'
};

class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}

	render() {
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Fragment>
						<Router>
							<Navbar />
							<Alerts />
							<Switch>
								<Route exact path="/" component={Login} />
								<Route exact path="/signup" component={Signup} />

								<PrivateRoute exact path="/addmember" component={AddMember} />
								<PrivateRoute exact path="/members/edit/:id" component={EditMember} />
								<PrivateRoute exact path="/members/view/:id" component={ViewMember} />
								<PrivateRoute exact path="/members" component={Members} />

								<PrivateRoute exact path="/profile" component={Profile} />
								<PrivateRoute exact path="/forgotpassword" component={ForgotPassword} />
								<PrivateRoute exact path="/userinformation" component={UserInformation} />

								<PrivateRoute exact path="/book_history" component={BookHistory} />
								<PrivateRoute exact path="/addbook" component={AddBook} />
								<PrivateRoute exact path="/books/edit/:id" component={EditBook} />
								<PrivateRoute exact path="/borrowedbook" component={BorrowedBook} />

								<PrivateRoute exact path="/books" component={BooksList} />
								<PrivateRoute exact path="/books/:id" component={BookDetails} />
								<PrivateRoute exact path="/books/view/:id" component={ViewBook} />

								<PrivateRoute exact path="/addcategory" component={AddCategory} />
								<PrivateRoute exact path="/categories/view/:id" component={ViewCategory} />
								<PrivateRoute exact path="/categories" component={Categories} />

								<PrivateRoute exact path="/members/view/:id" component={ViewMember} />
								<PrivateRoute exact path="/members" component={Members} />

								<PrivateRoute exact path="/club_members" component={BookClubMembers} />
								<PrivateRoute exact path="/dashboard" component={AdminBooks} />

								<Route path="*" component={PageNotFound} />
							</Switch>
						</Router>
						<Footer />
					</Fragment>
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;
