import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //load cart from local storage

  useEffect(() => {
    console.log("called the useEffect", bottles.length);
    if (bottles.length > 0) {
      const storageCart = getStoredCart();
      console.log(storageCart, bottles);
      const savedCart = [];
      for (const id of storageCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log("Saved cart", savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddTOCart = (bottle) => {
    // console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    //visual cart remove
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    //remove from store LS
    removeFromLS(id);
  };

  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      {bottles.map((bottle) => (
        <Bottle
          key={bottle.id}
          bottle={bottle}
          handleAddTOCart={handleAddTOCart}
        ></Bottle>
      ))}
    </div>
  );
};

export default Bottles;
