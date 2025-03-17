import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
function Search({fiiteredByRating,searchText,setSearchText,handleSearchBar}) {
  const {loggedInUser,setUserName} = useContext(UserContext);
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>{loggedInUser}</h3>
      <div style={{display:'flex',justifyContent:'space-around',margin:'10px'}}>
      <button onClick={fiiteredByRating}>Top Rated Restaurants in New Delhi</button>
      <div>
        <input
          type="text"
          data-testid ="searchInputBox"
          value={searchText}
          onChange={(e) => {
            e.preventDefault();
            setSearchText(e.target.value);
          }}
        />
        <button onClick={handleSearchBar}>Search</button>
        <label htmlFor="name">UserName :</label>
        <input value={loggedInUser} id="name" onChange={(e)=>setUserName(e.target.value)}/>
        
      </div>
      
    </div>
    </div>
  );
}

export default Search;
