import React from "react";

const PlaceOrder = () => {
  return (
    <div>
      <label htmlFor="product"></label>
      <select
        name="product"
        value={product}
        onChange={(e) => updateOrder(item, e.target.value)}
      >
        {" "}
        {products.map((p) => (
          <option key={id}>{p.name}</option>
        ))}
      </select>
      <label htmlFor="quantity"></label>
      <input
        name="quantity"
        value={quantity}
        placeholder="Enter the Quantity"
        type=""
        min={1}
      ></input>
    </div>
  );
};

export default PlaceOrder;
