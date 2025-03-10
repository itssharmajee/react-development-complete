import { IMAGE_BASE_URL } from "../utils/constraints";

const Card = ({cardData}) => {
  const {name, areaName, avgRating, cloudinaryImageId, costForTwo,sla } = cardData;


  return (<div className="card">
    <img src={IMAGE_BASE_URL.concat(cloudinaryImageId)} alt="Card Image" className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{name}</h2>
      <h4>{areaName}</h4>
      <p className="card-text">
        <span>Rating :{avgRating}</span>
        <br/>
        <span> Quantity: {costForTwo}</span>
        <span> Time : {sla.deliveryTime} minutes</span>
        
      </p>
    </div>
  </div>
)};

export default Card;
