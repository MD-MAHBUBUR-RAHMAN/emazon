import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Reviewitem from "../ReviewItem/Reviewitem";
import "./Order.css";
const Order = () => {
  const [cart, setCart] = useCart();
  const handelRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };

  return (
    <div className="shop-container">
      <div className="review-products-container">
        {cart.map((product) => (
          <Reviewitem
            key={product._id}
            product={product}
            remove={handelRemoveProduct}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button>
            <Link to="/shipment">Proceed Shipping</Link>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
