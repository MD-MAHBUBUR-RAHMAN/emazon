import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedData = getStoredCart();
    const savedCart = [];
    for (const id in storedData) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedData[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  return [cart, setCart];
};
export default useCart;
