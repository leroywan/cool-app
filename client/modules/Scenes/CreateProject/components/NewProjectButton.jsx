import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NewProjectButton extends React.Component {

	render() {
		return (
			<button className="new-project-button" onClick={ this.props.handleCreateProject }>New Project</button>
		)
	}

}

export default NewProjectButton;