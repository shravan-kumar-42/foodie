import { useState } from "react";
import ProductCard from "./components/ProductCard";
import About from "./components/About";
import Contact from "./components/Contact";
import products from "./utils/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);


  // =========================
  // ADD TO CART
  // =========================

  function addToCart(product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }


  // =========================
  // INCREASE QUANTITY
  // =========================

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }


  // =========================
  // DECREASE QUANTITY
  // =========================

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }


  // =========================
  // REMOVE FROM CART
  // =========================

  function removeFromCart(id) {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  }


  // =========================
  // CART COUNT
  // =========================

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // =========================
  // CART TOTAL
  // =========================

  const cartTotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  // =========================
  // CATEGORIES
  // =========================

  const categories = [
    "All",
    ...new Set(
      products.map((product) => product.category)
    ),
  ];


  // =========================
  // SEARCH AND CATEGORY FILTER
  // =========================

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });


  return (
    <div className="app">


      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="logo">
          🍴 Foodie
        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>


        {/* NAVIGATION LINKS */}

        <div
          className={`nav-links ${
            menuOpen ? "active" : ""
          }`}
        >

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#menu"
            onClick={() => setMenuOpen(false)}
          >
            Menu
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

        </div>


        {/* CART BUTTON */}

        <button
          className="nav-cart"
          onClick={() => setShowCart(!showCart)}
        >
          🛒 Cart ({cartCount})
        </button>

      </nav>


      {/* =========================
          CART
      ========================= */}

      {showCart && (
        <div className="cart-dropdown">

          <div className="cart-header">

            <h2>
              Your Cart
            </h2>

            <button
              className="close-cart"
              onClick={() => setShowCart(false)}
            >
              ✕
            </button>

          </div>


          {/* EMPTY CART */}

          {cart.length === 0 ? (

            <p className="empty-cart">
              Your cart is empty.
            </p>

          ) : (

            <>

              {/* CART ITEMS */}

              <div className="cart-items">

                {cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />


                    <div className="cart-item-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        ₹
                        {item.price.toLocaleString(
                          "en-IN"
                        )}
                      </p>


                      {/* CART QUANTITY */}

                      <div className="quantity">

                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>


                    {/* REMOVE */}

                    <button
                      className="remove-button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      🗑️
                    </button>

                  </div>

                ))}

              </div>


              {/* TOTAL */}

              <div className="cart-total">

                <strong>
                  Total:
                </strong>

                <strong>
                  ₹
                  {cartTotal.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>


              {/* CHECKOUT */}

              <button className="checkout-button">
                Checkout
              </button>

            </>

          )}

        </div>
      )}


      {/* =========================
          HOME
      ========================= */}

      <header
        className="header"
        id="home"
      >

        <h1>
          Food & Drinks
        </h1>

        <p>
          Explore our delicious collection
        </p>

      </header>


      {/* =========================
          SEARCH & FILTER
      ========================= */}

      <section
        className="filters"
        id="menu"
      >

        <input
          type="text"
          placeholder="🔍 Search food..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          {categories.map((item) => (

            <option
              key={item}
              value={item}
            >
              {item}
            </option>

          ))}

        </select>

      </section>


      {/* =========================
          PRODUCT COUNT
      ========================= */}

      <p className="product-count">

        Showing{" "}

        <strong>
          {filteredProducts.length}
        </strong>

        {" "}products

      </p>


      {/* =========================
          PRODUCTS
      ========================= */}

      <main className="products-container">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />

          ))

        ) : (

          <p className="no-products">
            No products found.
          </p>

        )}

      </main>


      {/* =========================
          ABOUT
      ========================= */}

      <About />


      {/* =========================
          CONTACT
      ========================= */}

      <Contact />

    </div>
  );
}

export default App;