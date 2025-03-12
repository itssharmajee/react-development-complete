import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "../constraints";

const useFetchMenu = (restId) => {
    const [menuData, setMenuData] = useState([]);

    const URL = SWIGGY_MENU_URL + restId;

    async function fetchData() {
        try {
            const response = await fetch(URL);
            const result = await response.json();

            const categories = result?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                ?.filter((c) => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

            setMenuData(categories);
            
        } catch (error) {
            console.log(error + 'check you internet connectivity');
        }
    }

    useEffect(() => {
        fetchData();
    }, [restId]);

    return menuData;
}

export default useFetchMenu;