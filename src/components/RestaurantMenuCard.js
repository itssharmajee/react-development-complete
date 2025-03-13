import { useDispatch } from "react-redux";
import { IMAGE_BASE_URL } from "../utils/constraints";
import { addItem } from "../store/slice/cartSlice";

const RestaurantMenuCard = ({menuData,open}) => {
    const dispatch = useDispatch();
    function handleAddtoCart(name){
        dispatch(addItem(String(name)))
    }

    return open && (
        <ul className="item-list">
            {menuData?.map((item) => (
                <li key={item.card.info.id}>
                    <div className="list-item-container">
                    <p><span className="item-name">{item.card.info.name} {" | "}</span>
                    <i>
                    <span className="item-price">
                        Rs.₹{" "}
                        {item.card.info.price
                            ? (item.card.info.price / 100)
                            : item.card.info.defaultPrice / 100}{" "}
                        
                    </span>
                    </i>
                    </p>
                    
                    <p>{item.card.info.description}</p>
                    </div>
                    <div className="btn-container">
                    <img src={IMAGE_BASE_URL+item.card.info.imageId} width={'80px'} alt="Notfound"/>
                    {IMAGE_BASE_URL+item.card.info.imageId && <button className="Add-btn" onClick={()=>{
                        handleAddtoCart(item.card.info.name)
                    }}>Add</button >}
                    </div>
                    
                </li>
            ))}
        </ul>
    )

}

export default RestaurantMenuCard;