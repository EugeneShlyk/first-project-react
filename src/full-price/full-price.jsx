import React from "react";
import { InnerPrice, PriceWrapper } from './styled';
import OldPrice from "../old-price/old-price";

export default function FullPrice ({ price, oldPrice }) {
  const showOldPrice = oldPrice && oldPrice > price;

  return (
    <PriceWrapper>
      {showOldPrice && <OldPrice value={oldPrice} />}
      {showOldPrice && " "}
      <InnerPrice value={price}/>
    </PriceWrapper>
  );
}
