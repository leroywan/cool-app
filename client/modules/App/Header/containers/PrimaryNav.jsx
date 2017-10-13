import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';

import { logoutSuccess, fetchUser } from 'actions/userActions';
import PrimaryNav from '../components/PrimaryNav.jsx';
import auth from 'utils/auth';

const mapStateToProps = (state, ownProps) => {
	return {
		state
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {

		fetchUser: ()=> {
			dispatch(fetchUser( auth.getJwtUser().userId ));
		},

		handleLogout: ()=>{
			dispatch(logoutSuccess());
			toast('Goodbye!', { position: toast.POSITION.BOTTOM_RIGHT });
			ownProps.history.push('/');
		}
	}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrimaryNav));

