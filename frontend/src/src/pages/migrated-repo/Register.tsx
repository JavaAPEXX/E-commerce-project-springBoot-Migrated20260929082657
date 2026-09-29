import React, { useState, ChangeEvent, FormEvent } from "react";

interface RegisterProps {
  /** CSRF parameter name (e.g. "_csrf") – supplied by the server */
  csrfParamName?: string;
  /** CSRF token value – supplied by the server */
  csrfToken?: string;
  /** Optional message to display (e.g. registration error) */
  msg?: string;
}

/**
 * Register page – migrated from `register.jsp`.
 * Preserves the original form action (`newuserregister`) and method (`POST`),
 * while using a modern, responsive card layout.
 */
const Register: React.FC<RegisterProps> = ({ csrfParamName, csrfToken, msg }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * The form is submitted using the native browser POST request
   * to keep the exact backend contract (`newuserregister` endpoint).
   * No `preventDefault()` is called so that the server processes the request
   * exactly as the original JSP did.
   */
  const handleSubmit = (e: FormEvent) => {
    // No custom client‑side handling required – let the browser submit.
    // Keeping the function only for potential future extensions.
  };

  return (
    <div className="modern-container">
      <div className="modern-card" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h3 style={{ marginTop: "10px" }}>Sign Up Now</h3>
        <p>Please fill out this to register</p>

        <form
          action="newuserregister"
          method="post"
          onSubmit={handleSubmit}
        >
          {/* CSRF hidden field – rendered only if values are provided */}
          {csrfParamName && csrfToken && (
            <input
              type="hidden"
              name={csrfParamName}
              value={csrfToken}
            />
          )}

          <div className="form-group">
            <label htmlFor="username" className="form-label">
              User Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Your Username*"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email*"
              required
              minLength={6}
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Password*"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="form-control"
              rows={3}
              placeholder="Enter Your Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group" style={{ marginTop: "10px" }}>
            Already have an account{" "}
            <a className="linkControl" href="/">
              Login here
            </a>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>

          {msg && (
            <div className="alert-box" style={{ color: "red", marginTop: "10px" }}>
              {msg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;