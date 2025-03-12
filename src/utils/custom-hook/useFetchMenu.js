import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "../constraints";

const useFetchMenu = (restId) => {
    const [menuData, setMenuData] = useState([]);

    const URL = SWIGGY_MENU_URL + restId;

    async function fetchData() {
        try {
            const response = await fetch(URL);
            const result = await response.json();
            // if result is not giving what's new section of the API it will take Recommended section of the API
            setMenuData(
                result?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
                    .card.itemCards == undefined ? result?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
                        .card.itemCards : result?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
                            .card.itemCards
            );
        } catch (error) {
            console.log(error + 'check you internet connectivity');
        }
    }

    useEffect(() => {
        fetchData();
    }, [restId]);

    console.log(menuData);

    return menuData;
}

export default useFetchMenu;