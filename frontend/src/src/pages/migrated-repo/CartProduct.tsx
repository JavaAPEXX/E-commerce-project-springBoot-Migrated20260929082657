import React, { useEffect, useState } from "react";

/**
 * Interface representing a single cart row as rendered in the original JSP.
 * Fields correspond exactly to the columns displayed in the table.
 */
interface CartItem {
  id: number;
  productName: string;
  price: string;
  description: string;
}

/**
 * CartProduct – React migration of `cartproduct.jsp`.
 *
 * Functional fidelity:
 *  • Retrieves cart rows from the backend (GET `/cart` – assumed existing endpoint that returns JSON).
 *  • Deletes a row via the original GET‑based endpoint `cart/delete?id=…`.
 *  • Provides a link to the original “Add Product” page (`/user/products`).
 *
 * UI modernization:
 *  • Uses the modern CSS design tokens (`.modern-container`, `.modern-card`, etc.).
 *  • Responsive table wrapped in `.modern-table-wrapper`.
 *  • Buttons styled with `.btn .btn-primary` and `.btn .btn-danger`.
 *  • Navigation bar retained with original Bootstrap classes (converted to `className`).
 */
const CartProduct: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /** Fetch cart items from the backend. */
  const fetchCartItems = async () => {
    setLoading(true);
    setError(null);
    try {
      // NOTE: The original JSP performed a direct DB query.
      // The closest existing endpoint is assumed to be `/cart` returning JSON.
      const response = await fetch("/cart", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      const data: CartItem[] = await response.json();
      setItems(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  /** Delete a cart entry using the original endpoint. */
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/cart/delete?id=${id}`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error(`Delete failed with status ${response.status}`);
      }
      // Refresh the list after successful deletion.
      await fetchCartItems();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  // Initial load.
  useEffect(() => {
    fetchCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-light min-vh-100">
      {/* ---------- Navbar (preserved) ---------- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="../static/images/logo.png"
              alt="Logo"
              width="auto"
              height="40"
              className="d-inline-block align-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/adminhome">
                  Home Page
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ---------- Main Content ---------- */}
      <div className="modern-container my-4">
        <div className="modern-card p-4">
          <a className="btn btn-primary mb-3" href="/user/products">
            Add Product
          </a>

          {/* Alert / error handling */}
          {error && (
            <div className="alert-box alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* Loading state */}
          {loading ? (
            <div className="alert-box alert alert-info" role="alert">
              Loading cart items...
            </div>
          ) : (
            <div className="modern-table-wrapper">
              <table className="table table-hover">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center">
                        No records found.
                      </td>
                    </tr>
                  ) : (
                    items.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;