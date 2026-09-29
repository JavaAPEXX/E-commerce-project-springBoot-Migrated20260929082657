import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface AdminHomeProps {
  // No dynamic data props required based on source analysis
}

const AdminHome: React.FC<AdminHomeProps> = () => {
  // State for mobile navigation toggle
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="admin-home-page bg-dark min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <Link to="/admin" className="navbar-brand d-flex align-items-center">
            <img
              src="/static/images/logo.png"
              alt="Logo"
              style={{ height: '40px', width: 'auto' }}
              className="d-inline-block align-top"
            />
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div 
            id="navbarSupportedContent" 
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          >
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/admin" className="nav-link" onClick={() => setIsNavOpen(false)}>
                  Home Page
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin/logout" className="nav-link" onClick={() => setIsNavOpen(false)}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Jumbotron / Hero Section */}
      <div className="jumbotron text-center bg-dark text-white py-5">
        <h1 className="display-4 font-weight-bold">Welcome Back, Admin</h1>
        <hr className="my-4 bg-light" />
        <p className="lead">Manage your data from this Admin Panel</p>
      </div>

      {/* Main Content */}
      <div className="container-fluid flex-grow-1 py-4">
        <div className="row justify-content-center">
          
          {/* Categories Card */}
          <div className="col-sm-3 col-md-3 col-lg-3 pt-4 px-3">
            <div className="card border border-info h-100 shadow-sm modern-card">
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <h4 className="card-title font-weight-bold mb-3">Categories</h4>
                <div className="divider mb-3"></div>
                <p className="card-text text-muted flex-grow-1">
                  Manage the categories section here.
                </p>
                <Link 
                  to="/admin/categories" 
                  className="btn btn-primary mt-3 w-100"
                >
                  Manage
                </Link>
              </div>
            </div>
          </div>

          {/* Products Card */}
          <div className="col-sm-3 col-md-3 col-lg-3 pt-4 px-3">
            <div className="card border border-secondary h-100 shadow-sm modern-card">
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <h4 className="card-title font-weight-bold mb-3">Products</h4>
                <div className="divider mb-3"></div>
                <p className="card-text text-muted flex-grow-1">
                  Manage all the products here.
                </p>
                <Link 
                  to="/admin/products" 
                  className="btn btn-primary mt-3 w-100"
                >