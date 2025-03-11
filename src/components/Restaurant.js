import { useParams } from "react-router-dom";
import RestaurantMenuCard from './RestaurantMenuCard';
import {Skeleton} from "./Skeleton"
import useFetchMenu from "../utils/custom-hook/useFetchMenu";
const Restaurant = () => {
  const { restId } = useParams(); // returning an object, we are taking restId from URL
  const menuData = useFetchMenu(restId);


  return (
    <div>
      <h2 id="menuList-heading">Menu Lists</h2>
      {
        menuData == null ? <Skeleton/> :
        <RestaurantMenuCard menuData={menuData} />
      }
    </div>
  );
};

export default Restaurant;
