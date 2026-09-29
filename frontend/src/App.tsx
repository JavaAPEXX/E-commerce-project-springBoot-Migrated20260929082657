import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/modern-ui.css';
import 403Component from './403Component';
import AdminHome from './src/pages/migrated-repo/AdminHome';
import AdminloginComponent from './AdminloginComponent';
import CartProduct from './src/pages/migrated-repo/CartProduct';
import CategoriesComponent from './CategoriesComponent';
import DisplaycustomersComponent from './DisplaycustomersComponent';
import IndexComponent from './IndexComponent';
import ProductsComponent from './ProductsComponent';
import ProductsaddComponent from './ProductsaddComponent';
import ProductsupdateComponent from './ProductsupdateComponent';
import Register from './src/pages/migrated-repo/Register';
import UpdateprofileComponent from './UpdateprofileComponent';
import UproductComponent from './UproductComponent';
import UserloginComponent from './UserloginComponent';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="modern-app-root">
        <header className="modern-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#2563eb' }}>Modernized Application</span>
          </div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: 500 }}>Home</Link>
          </nav>
        </header>
        <main className="modern-main-content">
          <Routes>
        <Route path="/" element={<403Component />} />
        <Route path="/403" element={<403Component />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminlogin" element={<AdminloginComponent />} />
        <Route path="/cartproduct" element={<CartProduct />} />
        <Route path="/categories" element={<CategoriesComponent />} />
        <Route path="/displaycustomers" element={<DisplaycustomersComponent />} />
        <Route path="/index" element={<IndexComponent />} />
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="/productsadd" element={<ProductsaddComponent />} />
        <Route path="/productsupdate" element={<ProductsupdateComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updateprofile" element={<UpdateprofileComponent />} />
        <Route path="/uproduct" element={<UproductComponent />} />
        <Route path="/userlogin" element={<UserloginComponent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
