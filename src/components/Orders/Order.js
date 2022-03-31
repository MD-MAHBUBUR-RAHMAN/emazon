import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Reviewitem from "../ReviewItem/Reviewitem";
import "./Order.css";
const Order = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);

  const handelRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="review-products-container">
        {cart.map((product) => (
          <Reviewitem
            key={product.id}
            product={product}
            remove={handelRemoveProduct}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button>
            <Link to="/inventory">Proceed Order</Link>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
