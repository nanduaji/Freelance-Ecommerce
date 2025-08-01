import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';
import Login from './components/Login';
import SignUp from './components/Signup';
import OTP from './components/OtpVerification';
import ForgotPassword from './components/ForgotPassword';
import SetPassword from './components/SetPassword';
import HomePage from './components/HomePage';
import ProductListingPage from './components/ProductListing';
import WishList from './components/WishList';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/setpassword" element={<SetPassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/productdetail" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/productlisting" element={<ProductListingPage />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
