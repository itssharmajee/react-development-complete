import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_URL } from "../utils/constraints";

const Restaurant = () => {
  const [menuData, setMenuData] = useState([]);
  const { restId } = useParams(); // returning an object, we are taking restId from URL

  // console.log("ss",useEffect());
  const URL = SWIGGY_MENU_URL + restId;

  async function fetchData() {
    try {
      const response = await fetch(URL);
      const result =await response.json();
      // console.log(res);

      // console.log(res.data.cards[2].card.card.info);
      // setMenuData(res?.data?.cards[2]?.card?.card?.info);
      setMenuData(
        result?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
          .card.itemCards
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2 id="menuList-heading">Menu Lists</h2>
      <ul className="item-list">
        {menuData?.map((item) => (
          <li key={item.card.info.id}>
            <span className="item-name">{item.card.info.name}</span>
            <span className="item-price">
              Rs.₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}{" "}
              .00
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
