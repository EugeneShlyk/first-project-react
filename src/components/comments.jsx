import React from "react";

export default function Comments ({ comments }) {
  return (
    <div>
      <h2>Комментарии</h2>

      comments.map((comment) => {
      <li key={comment.id}>

      </li>
    })
    </div>
  )
}
