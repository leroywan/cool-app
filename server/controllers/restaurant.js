import Restaurant from '../models/Restaurant';
import passport from 'passport';
import cuid from 'cuid'; // collision resistant id generator

import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken-refresh'; //has an extra 'refresh' method


// ===============================================================================================
// GET /api/search/:searchQuery ### get results based on user search query
// ===============================================================================================

exports.getSearchResults = (req, res) => {

	// find restaurant by city 
	Restaurant.find({ 'generalInfo.city': req.query.location }, (err, restaurant)=>{
			if (err) throw err;

			if (!restaurant) {
				res.json({ success: false, message: 'Restaurant not found.' })
			} else {
				res.json({ success: true, message: "Congrats, you've found a restaurant!", payload: restaurant })
			};
	});
}


