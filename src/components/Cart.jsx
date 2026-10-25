import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    cartCount
  } = useCart();

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  const checkout = () => {
    window.alert(
      "This is a demo checkout. Connect a payment gateway to accept real orders."
    );
  };

  return (
    <>

      <main>
        <section className="section-padding cart-page">
          <div className="container">
            <div className="page-title-block">
              <span className="eyebrow">Your selections</span>
              <h1>Your shopping bag.</h1>
              <p>Review your HueHaven products before checking out.</p>
            </div>

            {cart.length === 0 ? (
              <div className="empty-state cart-empty">
                <i className="bi bi-bag"></i>
                <h3>Your cart is waiting for colour.</h3>
                <p>You haven't added any products yet.</p>
                <Link to="/products" className="btn hh-btn">
                  Explore products
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            ) : (
              <div className="row g-5">
                <div className="col-lg-8">
                  <div className="cart-items">
                    {cart.map((item) => (
                      <article className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} />

                        <div className="cart-item-info">
                          <span className="cart-item-category">
                            {item.category}
                          </span>
                          <h3>{item.name}</h3>
                          <p>{item.size} · {item.finish}</p>

                          <button
                            className="remove-link"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i className="bi bi-trash3 me-1"></i>
                            Remove
                          </button>
                        </div>

                        <div className="cart-item-controls">
                          <strong>
                            {formatPrice(item.price * item.quantity)}
                          </strong>

                          <div className="quantity-control">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              −
                            </button>

                            <span>{item.quantity}</span>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}

                    <div className="cart-actions">
                      <Link to="/products" className="text-link">
                        <i className="bi bi-arrow-left me-2"></i>
                        Continue shopping
                      </Link>

                      <button className="remove-link" onClick={clearCart}>
                        Clear cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <aside className="order-summary">
                    <h2>Order summary</h2>

                    <div className="summary-row">
                      <span>Items</span>
                      <span>{cartCount}</span>
                    </div>

                    <div className="summary-row">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>

                    <div className="summary-row">
                      <span>Delivery</span>
                      <span>Calculated later</span>
                    </div>

                    <hr />

                    <div className="summary-total">
                      <span>Estimated subtotal</span>
                      <strong>{formatPrice(subtotal)}</strong>
                    </div>

                    <p className="summary-note">
                      Delivery charges and final order details are not
                      included in this demo.
                    </p>

                    <button
                      className="btn hh-btn w-100"
                      onClick={checkout}
                    >
                      Proceed to checkout
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </aside>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}