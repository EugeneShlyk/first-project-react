import React from "react";
import { StyledPrice } from './styled';

export default function Price ({ value, classname }) {
  return <StyledPrice classname={classname}>{value} ₽</StyledPrice>
}
