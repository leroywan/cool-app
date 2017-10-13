import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

	render() {
		return (
			<div id="dashboard" className="scene">
				<div className="title-container">
					<h2 className="title">Your Dashboard</h2>
				</div>
				<div className="button-panel">
					<div className="button-square">
						<Link to="/create-project">
							<img src="/assets/icons/create-project.svg"/>
							<p>Create Project</p>
						</Link>
					</div>
					<div className="button-square">
						<Link to="/create-project">
							<img src="/assets/icons/projects.svg"/>
							<p>Manage Projects</p>
						</Link>
					</div>
					<div className="button-square">
						<Link to="/profile">
							<img src="/assets/icons/profile.svg"/>
							<p>Edit Profile</p>
						</Link>
					</div>
					<div className="button-square">
						<Link to="/create-project">
							<img src="/assets/icons/settings.svg"/>
							<p>Edit Settings</p>
						</Link>
					</div>
				</div>
			</div>
		)
	}

}


export default Dashboard;