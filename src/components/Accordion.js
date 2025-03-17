import { useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";

const Accordion = ({ data, categoryIndex, showIndex, setshowIndex }) => {
    const [dyStyle, setDyStyle] = useState(true);

    function handleShowAccordion() {
        setshowIndex(showIndex === categoryIndex ? -1 : categoryIndex);
    }
    return (
        <div className="accordion-main-header">
            <div className="accordion-header" onClick={handleShowAccordion}>
                <span>
                    {data?.card?.card?.title}({data.card?.card?.itemCards?.length})
                </span>{" "}
                <i
                    className={
                        dyStyle ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
                    }
                ></i>
            </div>
            <div className="accordion-body" onClick={() => { }}>
                <RestaurantMenuCard
                    menuData={data?.card?.card?.itemCards}
                    open={showIndex == categoryIndex ? true : false}
                />
            </div>
        </div>
    );
};

export default Accordion;
