import axios from 'axios';
import auth from 'utils/auth';
import { toast } from 'react-toastify';

export const CREATING_PROJECT = 'CREATING_PROJECT';
export function creatingProject() {
	return {
		type: CREATING_PROJECT,
	}
}

export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export function createProjectSuccess() {
	return {
		type: CREATE_PROJECT_SUCCESS,
	}
}

export const CREATE_PROJECT_FAIL = 'CREATE_PROJECT_FAIL';
export function createProjectFail() {
	return {
		type: CREATE_PROJECT_FAIL,
		
	}
}

export function createProject(projectName) {
	return (dispatch) => {
		dispatch(creatingProject());
		return axios.post('/api/project/createProject', {
			name: projectName,
			userId: auth.getJwtUser().userId,
		}).then( (res)=>{
			if (res.data.success) {
				dispatch(createProjectSuccess(res.data.payload));
				toast('Successfully Create Project: ' + projectName, { position: toast.POSITION.BOTTOM_RIGHT })
			} else {
				dispatch(createProjectFail(res.data.message))
				toast.error(res.data.message, { position: toast.POSITION.BOTTOM_RIGHT })
			}
		})
	}
}