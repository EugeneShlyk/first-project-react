import React from "react";
import Button from '../button/button';
import { StyledCounter, Value } from './styled';

export default function Counter () {
  return (
    <StyledCounter>
      <Button size="small">-</Button>
      <Value>1</Value>
      <Button size="small">+</Button>
    </StyledCounter>
  )
}
