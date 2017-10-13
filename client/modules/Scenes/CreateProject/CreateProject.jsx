import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import NewProjectButton from './containers/NewProjectButton.jsx';

class CreateProject extends React.Component {

	render() {
		return (
			<div id="create-project" className="scene">
				<h2 className="title">Create New Project</h2>
				<NewProjectButton />
			</div>
		)
	}

}

export default CreateProject;