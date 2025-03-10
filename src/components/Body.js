import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Skeleton } from "./Skeleton";
import Search from "./Search";
const Body = () => {
  const [actualData, setActualData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json();
    const result =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;  
    setActualData(result);
    setFilteredData(result);
  }



  function handleSearchBar() {
    let s = actualData.filter((item) => item.info.name.toUpperCase().includes(searchText.toUpperCase()));// making case insensitive 
    setFilteredData(s);
  }


  function moreThanSpecific() {
    let updatedList = actualData.filter((item) => item.info.avgRating > 4.2);
    setActualData(updatedList);
  }

  useEffect(() => {
    fetchData();
  }, []);



  return actualData?.length == 0 ? <Skeleton/> : (
    <div>
      <Search searchText={searchText} setSearchText={setSearchText} handleSearchBar={handleSearchBar} moreThanSpecific={moreThanSpecific}/>
      <div className="card-container">
        {filteredData?.map((item, index) => (
          <Card key={item.info.id} cardData={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
