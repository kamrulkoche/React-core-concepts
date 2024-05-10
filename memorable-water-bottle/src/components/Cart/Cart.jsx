// import PropTypes from "prop-types";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div>
        {cart.map((bottle, index) => (
          <div key={index}>
            <p>{bottle.id}</p>
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Cart.PropTypes = {
//   cart: PropTypes.array.isRequired,
// };

export default Cart;
