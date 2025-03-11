const ClothCard = ({ data }) => {
    const { title, price, image } = data;
    return (
        <div className="card">
            <img src={image} alt="Card Image" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <h4>Rs.₹ {price}</h4>
            </div>
        </div>
    )
}

export default ClothCard;