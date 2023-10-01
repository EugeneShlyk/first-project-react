import React from "react";
import Price from "./price.jsx";
import OldPrice from "./old-price";

export default function FullPrice ({ price, oldPrice }) {
  const showOldPrice = Boolean(oldPrice && oldPrice > price);

  return (
    <>
      {showOldPrice && <OldPrice value={oldPrice} />}
      {showOldPrice && " "}
      <Price value={price}/>
    </>
  );
}
