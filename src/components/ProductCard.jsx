function ProductCard({ product, addToCart, cart, increaseQuantity, decreaseQuantity }) {
  const cartItem = cart.find(
    (item) => item.id === product.id
  );

  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product-card">

      <div className="image-container">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {/* QUANTITY BADGE */}
        {quantity > 0 && (
          <span className="quantity-badge">
            {quantity}
          </span>
        )}

      </div>


      <div className="product-info">

        <p className="category">
          {product.category}
        </p>

        <h2>
          {product.name}
        </h2>

        <p className="rating">
          ⭐ {product.rating}
        </p>


        <div className="bottom">

          <span className="price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>


          {/* ADD TO CART / QUANTITY */}

          {quantity === 0 ? (

            <button
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

          ) : (

            <div className="card-quantity">

              <button
                onClick={() =>
                  decreaseQuantity(product.id)
                }
              >
                −
              </button>

              <span>
                {quantity}
              </span>

              <button
                onClick={() =>
                  increaseQuantity(product.id)
                }
              >
                +
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default ProductCard;