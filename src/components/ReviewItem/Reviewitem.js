import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const Reviewitem = (props) => {
  const { remove, product } = props;
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-detail-container">
        <div className="review-item-detail">
          <p className="product-name" title={name}>
            {name.length > 15 ? name.slice(0, 15) + "..." : name}
          </p>
          <p>
            Price: $ <span className="orange-color">{price}</span>
          </p>
          <p>
            <small>Shipping: $ {shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-item">
          <button onClick={() => remove(product)} className="delet-button">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviewitem;
