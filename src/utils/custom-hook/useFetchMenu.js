import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "../constraints";

const useFetchMenu = (restId) => {
    const [menuData, setMenuData] = useState([]);

    const URL = SWIGGY_MENU_URL + restId;

    async function fetchData() {
        try {
            const response = await fetch(URL);
            const result = await response.json();
            
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

    return menuData;
}

export default useFetchMenu;