import React from "react";

export default function Gallery ({ src, alt }) {
  return (
    <div>
      <img width="200" height="257" src={src} alt={alt} />
    </div>
  );
}
