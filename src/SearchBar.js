import React from "react";

var SearchBar = (props) => (
	<div className="search-bar">
	  <span>
	    <input type="text" id="search-term" value={props.searchTerm} onChange={props.search} />
	    <button className="btn">Search</button>
	  </span>
	</div>
);

export default SearchBar;
