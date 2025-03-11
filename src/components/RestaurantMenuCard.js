
const RestaurantMenuCard = ({menuData}) => {

    return (
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
    )

}

export default RestaurantMenuCard;