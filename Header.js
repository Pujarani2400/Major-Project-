import React from 'react';
import './Header.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const Header = ({ userType }) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const userId = userInfo ? userInfo._id : null;
  return (
    <header className="header">
      <div className="logo-container" style={{borderRadius:'25px'}}>
        <img src="/logo.jpg" alt="Logo" className="logo" style={{borderRadius:'30px'}}/>
      </div>
      {userType === 'seller' ? (
        <>
          <nav className="nav-links">
            <Link to="/seller" className='nav-item'>Home</Link>
            <Link to="/addProduct" className='nav-item'>Add Product</Link>
            <Link to="/viewProduct" className='nav-item'>View Product</Link>
            <Link to="/changeStatus" className='nav-item'>Change Status</Link>
            <Link to="/logout" className='nav-item'>Logout</Link>
          </nav>
        </>
      ) : userType === 'user' ? (
        <>
          <nav className="nav-links">
            <Link to="/user" className='nav-item'>Home</Link>
            <Link to="/showProduct" className='nav-item'>Show Product</Link>
            <Link to="/allOrders" className='nav-item'>Your Order</Link>
            <Link to={`/addToCart/${userId}`} className='nav-item'>Check Cart</Link>
            <Link to="/logout" className='nav-item'>Logout</Link>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav-links">
            <Link to="/" className="nav-item">User Login</Link>
            <Link to="/userSignup" className="nav-item">User Signup</Link>
            <Link to="/sellerLogin" className="nav-item">Seller Login</Link>
            <Link to="/sellerSignup" className="nav-item">Seller Signup</Link>
          </nav>
        </>
      )}
    </header>
  );
};
export default Header;
