import React from "react";

function Search({fiiteredByRation,searchText,setSearchText,handleSearchBar}) {
  return (
    <div style={{display:'flex',justifyContent:'space-around',margin:'10px'}}>
      <button onClick={fiiteredByRation}>click for rating more than 4.2</button>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value);
          }}
        />
        <button onClick={handleSearchBar}>Search</button>
      </div>
      
    </div>
  );
}

export default Search;
