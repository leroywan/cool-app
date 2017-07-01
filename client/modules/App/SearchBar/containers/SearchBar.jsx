import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import SearchBar from '../components/SearchBar.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    searchQuery: state.searchBar.searchQuery
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    handleSubmit: (searchQuery) => {
    	console.log('Your search query is: ' + searchQuery);
      ownProps.history.push('/search/' + searchQuery);
    }

  }
}

const SearchBarContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar))

export default SearchBarContainer