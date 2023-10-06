import React from "react";
import Button from '../button/button';

export default function Description ({ text }) {
  return (
    <React.Fragment>
      <h2>Описание</h2>

      {text}

      <Button>Подробнее</Button>
    </React.Fragment>
  )
}
