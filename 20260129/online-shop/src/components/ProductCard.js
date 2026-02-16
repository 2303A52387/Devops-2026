function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <p className="product-title">{product.name}</p>

      <div className="rating">⭐⭐⭐⭐☆</div>

      <div className="price">₹{product.price}</div>
      <div className="mrp">M.R.P: ₹{product.mrp}</div>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;