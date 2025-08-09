import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsSection from './pages/Home/OurProduct';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsappChatButton from './components/common/WhatsappChatButton';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WhatsappChatButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsSection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;