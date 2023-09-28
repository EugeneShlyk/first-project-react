import React from "react";

export default function Description ({ text }) {
  return (
    <React.Fragment>
      <h2>Описание</h2>

      {text}

      <button>Подробнее</button>
    </React.Fragment>
  )
}
