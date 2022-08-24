import { FaHeart } from "react-icons/fa";
import "./card.css";

export const Card = (product) => {
  const { _id, name, price, marker, image, size, brand } = product;

  return (
    <div key={_id} className="card card-vertical">
      <div className="image-container-vert">
        <img
          className="img responsive-image product-image"
          src={image.src}
          alt={image.alt}
        />

        <FaHeart className={`wishlist-icon-vert`} />
      </div>
      <div className="text-btn-container">
        <div className="text-container vertical-text">
          <small className="quiet">{marker}</small>
          <small>
            <br />
          </small>
          <p>
            {name} <br />
            Rs.{price} <br />
            {brand} <br />
            Size: {size}
          </p>
        </div>
        <div className="btn-container cta-btn">
          <button className="btn btn-primary-solid">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
