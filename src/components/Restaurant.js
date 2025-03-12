import { useParams } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { Skeleton } from "./Skeleton";
import useFetchMenu from "../utils/custom-hook/useFetchMenu";
import Accordion from "./Accordion";
import { useState } from "react";
const Restaurant = () => {
  const { restId } = useParams(); // returning an object, we are taking restId from URL
  const categories = useFetchMenu(restId);
  const [showIndex, setshowIndex] = useState(-1); 

  return (
    <div>
      <h2 id="menuList-heading">Menu Lists</h2>
      {categories.map((cat, index) => (
        <Accordion
          key={cat.card.card.categoryId}
          data={cat}
          categoryIndex={index}
          showIndex={showIndex} // Pass current open section index
          setshowIndex={setshowIndex} // Pass the function to set the open section index
        />
      ))}
    </div>
  );
};

export default Restaurant;
