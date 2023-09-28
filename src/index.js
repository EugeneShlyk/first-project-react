import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { product } from "./mock";

import ProductPage from "./components/product-page";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <StrictMode>
    <ProductPage product={product} />
  </StrictMode>,
);
