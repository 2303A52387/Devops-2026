import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "HP Laptop 15s, 8GB RAM, 512GB SSD",
      price: 52999,
      mrp: 60999,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Samsung Galaxy Smartphone",
      price: 21999,
      mrp: 25999,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "boAt Rockerz Headphones",
      price: 2999,
      mrp: 4990,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Noise Smart Watch",
      price: 6999,
      mrp: 9999,
      image: "https://via.placeholder.com/200"
    }
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="logo">amazon</div>

        <div className="search-bar">
          <input type="text" placeholder="Search Amazon.in" />
          <button>🔍</button>
        </div>

        <div className="cart">🛒 Cart ({cartCount})</div>
      </div>

      {/* Products */}
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;