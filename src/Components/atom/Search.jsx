import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as SearchIcon } from "../../Assets/icons8-search.svg";
import { useNavigate } from "react-router";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery === "") {
      alert("input can not be empty");
      return;
    } else {
       navigate(`/movies/${searchQuery}`);
      console.log("hello world");
      // Make an API request to search for movies based on the searchTerm
      
    }
  };
  console.log(searchResults, "riir");
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Enter your search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">
        <SearchIcon className="search-icon" />
      </button>
    </form>
  );
}

export default Search;
