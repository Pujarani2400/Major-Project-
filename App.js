import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './Header';
import UserLogin from './Component/UserLogin/UserLogin';
import UserSignUp from './Component/UserSignup/UserSignup';
import SellerSignUp from './Component/SellerSignup/SellerSignup';
import SellerLogin from './Component/SellerLogin/SellerLogin';
import SellerLanding from './Component/Seller/SellerLanding';
import UserLanding from './Component/User/UserLanding';
import Logout from './Component/Logout/Logout';
import AddProduct from './Component/AddProduct/AddProduct';
import ViewProduct from './Component/ViewProduct/ViewProduct';
import EditProduct from './Component/EditProduct/EditProduct';
import ShowProduct from './Component/ShowProduct/ShowProduct';
import AddToCart from './Component/AddToCart/AddToCart';
import AllOrders from './Component/AllOrders/AllOrders';
import ChangeStatus from './Component/ChangeStatus/ChangeStatus';
function App() {
  const [userType, setUserType] = useState(localStorage.getItem('userType')); // Initialize state with localStorage value

  const handleLogin = (type) => {
    setUserType(type); // Update userType state on login
    localStorage.setItem('userType', type); // Store userType in localStorage
  };

  const handleLogout = () => {
    setUserType(null); // Reset userType state on logout
  };

  return (
    <BrowserRouter>
      <Header userType={userType} />
      <Routes>
        <Route path='/' element={<UserLogin onLogin={() => handleLogin('user')} />} />
        <Route path='/userSignup' element={<UserSignUp />} />
        <Route path='/sellerSignup' element={<SellerSignUp />} />
        <Route path='/sellerLogin' element={<SellerLogin onLogin={() => handleLogin('seller')} />} />
        <Route path='/seller' element={<SellerLanding />} />
        <Route path='/user' element={<UserLanding />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/viewProduct' element={<ViewProduct />} />
        <Route path="/editProduct" element={<EditProduct />} />
        <Route path='/showProduct' element={<ShowProduct />} />
        <Route path="/addToCart/:userId" element={<AddToCart />} />
        <Route path="/allOrders" element={<AllOrders />} />
        <Route path="/changeStatus" element={<ChangeStatus />} />
        <Route path='/logout' element={<Logout onLogout={handleLogout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
