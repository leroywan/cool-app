import { connect } from 'react-redux'
import { setSearch } from '../../../App.Actions'
import SearchBar from '../SearchBar.jsx'


const clearInput = ()=> { document.getElementById('searchInput').value = ''; }

const mapStateToProps = (state, ownProps) => {
  return {
    searchQuery: state.app.searchQuery
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    onSearchSubmit: () => {
    	// clear input when user submits
    	clearInput();
    }, 

    clearInput: (e) => {
    	// clear input if user presses enter
    	if (e.key === 'Enter') { 
    		clearInput() 
    	}
    },

    setSearchQuery: (e) => {
    	dispatch( setSearch(e.target.value) )
    }
  }
}

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer