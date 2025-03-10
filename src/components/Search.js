import React from "react";

function Search({moreThanSpecific,searchText,setSearchText,handleSearchBar}) {
  return (
    <div>
      <button onClick={moreThanSpecific}>click for rating more than 4.2</button>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value);
          }}
        />
      </div>
      <button onClick={handleSearchBar}>Search</button>
    </div>
  );
}

export default Search;
