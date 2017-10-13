import React from 'react';
import { connect } from 'react-redux';

import { editUserProfilePic, editProfilePicSuccess, editProfilePicFail, fetchUser } from 'actions/userActions';
import auth from 'utils/auth';
import axios from 'axios';

import { GridLoader } from 'react-spinners';
class UserProfile extends React.Component {

	state = {
		profilePicUrl: null,
		uploadToggleState: false,
	}

	handleInputChange = (e)=> {
		this.setState({ profilePicUrl: e.target.value });
	}

	handleUploadToggle = ()=>{
		this.setState({ uploadToggleState: !this.state.uploadToggleState })
	}

	componentWillMount() {
		this.props.fetchUserInfo(); 
	}

	render() {
		let user = this.props.state.user.info.data;
		let userName = !user ? "" : user.profile.firstName + " " + user.profile.lastName;

		// https://dl.dropboxusercontent.com/s/qkl2nrmap3sc7yp/elon.jpg?dl=0 elon musk image...
		let profilePic = <img className="fade-in" src={this.props.state.user.picUrl}/>;

		let uploadArea = this.state.uploadToggleState ? 
			<div>
				<div className="input-area">
				<input placeholder="profile picture url here..." type="text" name="profilePicUrl" onChange={ this.handleInputChange }></input>
					<button type="submit" onClick={ 
						(e)=>{ 
							e.preventDefault();
							this.handleUploadToggle();
							this.props.handleProfilePicSubmit(this.state.profilePicUrl); 
						}
					}>Add Profile Picture</button>
				</div>
				<a className="upload-toggle-btn back" href="#" onClick={ this.handleUploadToggle }>Back</a>
			</div>
			:
			<a className="upload-toggle-btn" href="#" onClick={ this.handleUploadToggle }>Upload Photo</a>

		return (
			<div id="user-profile" className="scene">
				<div className="profile-picture">
					{ profilePic }
				</div>
				<h3 className="username">{ userName }</h3>
				<form method="PUT">
					{ uploadArea }
				</form>
			</div>
		)		
	}

}

const mapStateToProps = (state, ownProps) => {
	return {
		state
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleProfilePicSubmit: (url)=> {
			dispatch(editUserProfilePic(url));
		},

		fetchUserInfo: ()=>{
			dispatch(fetchUser(auth.getJwtUser().userId))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)

