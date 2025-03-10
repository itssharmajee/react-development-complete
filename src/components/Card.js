const Card = ({cardData}) => {
  const {name, areaName, avgRating, cloudinaryImageId, costForTwo,sla } = cardData;

let baseURL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

  return (<div className="card">
    <img src={baseURL.concat(cloudinaryImageId)} alt="Card Image" className="card-image" />
    <div className="card-content">
      <h2 className="card-title">{name}</h2>
      <h4>{areaName}</h4>
      <p className="card-text">
        <span>Rating :{avgRating}</span>
        <br/>
        <span> Quantity: {costForTwo}</span>
        <span> Time : {sla.deliveryTime} minutes</span>
        
      </p>
      <a href="#" className="card-button">
        Add to Cart
      </a>
    </div>
  </div>
)};

export default Card;
