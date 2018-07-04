import React from "react";
import MovieList from "./MovieList.js";
import SearchBar from "./SearchBar.js"

class App extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  	  movies: this.props.movies,
      searchTerm: '',

  	}
  }

  search(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    let regex = new RegExp(searchTerm);
  	return this.props.movies.reduce((acc, value, index) => {
  	  if (value.title.toLowerCase().match(regex) !== null) acc.push(index);
      return acc; 
  	}, []);
  }

  render(){
    return(
      <div className="App">
        <div className="title-bar">
          <h3>Movie List</h3>
        </div>
        <SearchBar search={this.search.bind(this)} searchTerm={this.state.searchTerm} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
