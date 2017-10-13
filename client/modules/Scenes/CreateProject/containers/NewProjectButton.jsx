import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createProject } from 'actions/projectActions';

import NewProjectButton from '../components/NewProjectButton.jsx';

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	handleCreateProject: ()=>{
  		dispatch( createProject('NewProject') )
  	}
  }
}

const NewProjectButtonContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectButton));

export default NewProjectButtonContainer