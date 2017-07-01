import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		state
	}
}

const mapDispatchToProps = (state, ownProps) => {
	return {
		doStuff: ()=> {
			console.log('doing stuff');
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)

