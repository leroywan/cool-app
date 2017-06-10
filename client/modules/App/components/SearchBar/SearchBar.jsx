import React from 'react';

import _ from 'lodash';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import styles from './SearchBar.scss';

let locations = {
	1: 'Toronto',
	2: 'Ottawa',
	3: 'Montreal',
	4: 'London',
	5: 'Niagara'
}

import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
     text: state.text
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showToast : () => dispatch({
      type : 'SHOW_TOAST'
    })
  }
}

class SearchBar extends React.Component {

	state = {
    startingLocationIndex: null,	
    destinationIndex: null,
    date: null,
  };

  handleStartingLocation = (event, index, startingLocationIndex) => { 
  	this.setState({ startingLocationIndex });
 	};

  handleDestination = (event, index, destinationIndex) => {
  	this.setState({ destinationIndex });
  }

  setDepartureDate = (event, date) => {
		this.setState({ date: moment(date).format('dddd LL') })
  }

  render() {

  	let minDate = new Date();
  	let maxDate = new Date();
  	maxDate.setDate(maxDate.getDate() + 30);

  	const summary = (this.state.startingLocationIndex != null && this.state.destinationIndex != null && this.state.date != null) ? 
  		<h3>From { locations[this.state.startingLocationIndex] } to { locations[this.state.destinationIndex] } on { this.state.date }</h3>
  		: <h3>Ready to Ride?</h3> 

		return (
			<div className={styles.searchBarContainer}>
				{summary}
				<div className={styles.searchBar + ' row'}>
					<div className={styles.inputContainer + ' col-sm-3'}>
						<i className={styles.searchBarIcon + ' material-icons'}>today</i>
		        <DatePicker 		
			        formatDate = { (date)=>{ 
			        	return  moment(date).format('dddd LL') } 
			        }
			        onChange = { this.setDepartureDate }
		        	hintText="Departure Date" 
		        	container="inline" 
		        	mode="landscape" 
		        	disableYearSelection={true} 
		        	minDate={ minDate }
		        	maxDate={ maxDate }
		        	autoOk={ true }
		        	textFieldStyle= {{ fontSize:'1.3em' }}
		        	style = {{'cursor':'pointer','height':'100%', 'display':'flex', 'alignItems':'flex-end', 'marginBottom':'1px' }}
	       	 />
	        </div>
	        <div className={styles.inputContainer + ' col-sm-3'}>
	        	<i className={styles.searchBarIcon + ' material-icons'}>my_location</i>
		        <SelectField
		          floatingLabelText="Starting Location"
		          value={this.state.startingLocationIndex}
		          onChange={this.handleStartingLocation}
		          style = {{ textAlign:"left" }}
		          fullWidth={ true }
		          labelStyle={{ fontSize:'1.3em' }}
		          floatingLabelStyle= {{ fontSize: '1.3em' }}
		          menuItemStyle = {{ lineHeight:'50px' }}
		        >
		          <MenuItem value={1} primaryText="Toronto" />
		          <MenuItem value={2} primaryText="Ottawa" />
		          <MenuItem value={3} primaryText="Montreal" />
		          <MenuItem value={4} primaryText="London" />
		          <MenuItem value={5} primaryText="Niagara" />
		        </SelectField>
		      </div>
		      <div className={styles.inputContainer + ' col-sm-3'}>
		      	<i className={styles.searchBarIcon + ' material-icons'}>place</i>
		        <SelectField
		          floatingLabelText="Destination"
		          value={this.state.destinationIndex}
		          onChange={this.handleDestination}
		          style = {{ textAlign:"left" }}
		          fullWidth={ true }
		          labelStyle={{ fontSize:'1.3em' }}
		          floatingLabelStyle= {{ fontSize: '1.3em' }}
		          menuItemStyle = {{ lineHeight:'50px' }}
		        >
		          <MenuItem value={1} primaryText="Toronto" />
		          <MenuItem value={2} primaryText="Ottawa" />
		          <MenuItem value={3} primaryText="Montreal" />
		          <MenuItem value={4} primaryText="London" />
		          <MenuItem value={5} primaryText="Niagara" />
		        </SelectField>
		      </div>

		      <div className={styles.inputContainer + ' col-sm-3'} style={{ 'height':'100%', 'background':'rgb(40, 40, 40)', 'padding':'0px' }}>
		        <FlatButton
				      label="Search"
				      secondary={ true }
				      icon={ <i className="material-icons" style={{ color:"white" }}>search</i> }
							fullWidth={ true }
							style={{ 'height':'100%', 'width':'100%', 'paddingLeft':'30px', 'paddingRight':'30px' }}
							labelStyle={{ fontSize:'20px', color:'white' }}
				    />
			    </div>
	      </div>
      </div>


  	)
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar)