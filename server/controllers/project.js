import Project from '../models/Project';
import cuid from 'cuid'; // collision resistant id generator




// ===============================================================================================
// POST /api/project/createProject ### Create New Project
// ===============================================================================================

exports.postCreateProject = (req, res) => {
	
	let project = new Project({
		projectId: cuid(),
		admins: req.body.userId,
		info: {
			name: req.body.name
		}
	})

	project.save((err)=>{
		if (err) {
			return res.json({ success: false, message: err.message });
		}

		res.json({ success: true, message: 'New project is created' })

	})

};
