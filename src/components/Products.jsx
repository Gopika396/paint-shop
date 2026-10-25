import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products, categories, finishes } from "../data/products";

export default function Products() {
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [finish, setFinish] = useState("All");
  const [sort, setSort] = useState("featured");
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      const matchesFinish =
        finish === "All" || product.finish === finish;

      return matchesSearch && matchesCategory && matchesFinish;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, finish, sort]);

  const handleAdd = (product) => {
    addToCart(product);
    setToast(`${product.name} added to your cart`);
  };

  return (
    <>

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">The HueHaven collection</span>
            <h1>Find your kind of colour.</h1>
            <p>
              Explore paints, finishes and painting essentials for your next
              project.
            </p>
          </div>
        </section>

        <section className="section-padding products-page">
          <div className="container">
            <div className="products-toolbar">
              <div>
                <h2>Our products</h2>
                <p>{filteredProducts.length} products found</p>
              </div>

              <div className="products-search">
                <i className="bi bi-search"></i>
                <input
                  type="search"
                  placeholder="Search paints and tools..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search products"
                />
              </div>

              <select
                className="form-select sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </div>

            <div className="filter-row">
              <div className="filter-group">
                <span>Surface:</span>
                {categories.map((item) => (
                  <button
                    key={item}
                    className={`filter-chip ${category === item ? "active" : ""}`}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="filter-group">
                <span>Finish:</span>
                {finishes.map((item) => (
                  <button
                    key={item}
                    className={`filter-chip ${finish === item ? "active" : ""}`}
                    onClick={() => setFinish(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="row g-4 mt-2">
              {filteredProducts.map((product, index) => (
                <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                  <article
                    className="product-card"
                    data-aos="fade-up"
                    data-aos-delay={(index % 4) * 60}
                  >
                    <div className="product-image-wrap">
                      <img src={product.image} alt={product.name} />

                      {product.badge && (
                        <span className="product-badge">{product.badge}</span>
                      )}

                      <div
                        className="product-colour-dot"
                        style={{ backgroundColor: product.colour }}
                        title={`Colour sample: ${product.colour}`}
                      ></div>
                    </div>

                    <div className="product-card-body">
                      <div className="product-meta">
                        <span>{product.category}</span>
                        <span>{product.finish}</span>
                      </div>

                      <h3>{product.name}</h3>
                      <p>{product.description}</p>

                      <div className="product-bottom">
                        <div>
                          <strong>
                            ₹{product.price.toLocaleString("en-IN")}
                          </strong>
                          <small>{product.size}</small>
                        </div>

                        <button
                          className="add-cart-btn"
                          onClick={() => handleAdd(product)}
                          aria-label={`Add ${product.name} to cart`}
                        >
                          <i className="bi bi-bag-plus"></i>
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="empty-state">
                <i className="bi bi-search"></i>
                <h3>No matching products</h3>
                <p>Try another search term or clear your filters.</p>
                <button
                  className="btn hh-btn"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                    setFinish("All");
                    setSort("featured");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      {toast && (
        <div className="cart-toast" role="status">
          <i className="bi bi-check-circle-fill me-2"></i>
          {toast}
        </div>
      )}
    </>
  );
}