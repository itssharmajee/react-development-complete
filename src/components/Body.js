import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Skeleton } from "./Skeleton";
import Search from "./Search";
import { SWIGGY_DATA_URL } from "../utils/constraints.js";
import { Link } from "react-router-dom";
const Body = () => {
  const [actualData, setActualData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function fetchData() {
    const response = await fetch(SWIGGY_DATA_URL);
    const data = await response.json();
    const result =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setActualData(result);
    setFilteredData(result);
  }

  function handleSearchBar() {
    let s = actualData.filter((item) =>
      item.info.name.toUpperCase().includes(searchText.toUpperCase())
    ); // making case insensitive
    setFilteredData(s);
  }

  function moreThanSpecific() {
    let updatedList = actualData.filter((item) => Number(item.info.avgRating ) > 4.2);
    setFilteredData(updatedList);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return actualData?.length == 0 ? (
    <Skeleton />
  ) : (
    <div>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        handleSearchBar={handleSearchBar}
        moreThanSpecific={moreThanSpecific}
      />
      <div className="card-container">
        {filteredData?.map((item) => {
          return (
            <Link key={item.info.id} to={"/restaurant/" + item.info.id}>
              {console.log(item.info.id)
              }
              <Card cardData={item.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
