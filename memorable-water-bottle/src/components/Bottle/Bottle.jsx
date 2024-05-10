import "./Bottle.css";

const Bottle = ({ bottle, handleAddTOCart }) => {
  const { brand, type } = bottle;
  return (
    <div className="bottle">
      <h3>Bottle: {brand}</h3>
      <p>Type: {type}</p>
      <button onClick={() => handleAddTOCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
