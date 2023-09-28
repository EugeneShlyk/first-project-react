import React from "react";
import Comments from './comments';
import Popularity from './popularity';
import Title from "./title.jsx";
import Code from "./code.jsx";
import Gallery from "./gallery.jsx";
import FullPrice from "./full-price.jsx";
import Counter from "./counter.jsx";
import Description from "./description";


function ProductPage ({ product }) {
  return (
    <section>
      <Title>{product.name}</Title>
      <Code>{product.code}</Code>
      <div style={{ display: "flex" }}>
        <Gallery src={product.src} alt={product.name} />

        <div>
          <p>
            Цена:{" "} <FullPrice price={product.price} oldPrice={product.oldPrice} />
          </p>

          <div>
            Количество: <Counter />
          </div>

          <p>
            <span>Доставка:</span> {product.delivery}
          </p>

          <button>Купить</button>

          <Popularity count={product.comments.length} />
        </div>
      </div>

      <Description text={product.description} />

      <Comments comments={product.comments} />
    </section>
  )
}

export default ProductPage;
