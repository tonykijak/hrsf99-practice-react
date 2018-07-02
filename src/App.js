import React from "react";
import MovieList from "./MovieList.js";
import SearchBar from "./SearchBar.js"

class App extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  	  movies: []
  	}
  }

  search() {
  	this.props.movies.reduce((acc, value) => {
  	  return acc;
  	}, false);
  }

  render(){
    return(
      <div className="App">
        <div className="title-bar">
          <h3>Movie List</h3>
        </div>
        <SearchBar />
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

export default App;
