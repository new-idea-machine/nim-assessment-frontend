import React from "react";

function MenuItem({ item, addItemToOrder }) {
  return (
    <div className="menu-item" key={item.id}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>

      <button
        className="small-button"
        onClick={() => {
          addItemToOrder(item);
        }}
      >
        Add to Order
      </button>
    </div>
  );
}

export default MenuItem;
