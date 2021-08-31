import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__links">
				<Link to="/members">Members</Link>
				<Link to="/dashboard">All Books</Link>
				<Link to="/borrowedbook">Borrowed Books</Link>
				<Link to="/categories">Categories</Link>
			</div>
		</div>
	);
}

export default Sidebar;
