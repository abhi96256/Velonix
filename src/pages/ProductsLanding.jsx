import React from 'react';
import TissueMotion from '../components/TissueMotion';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './ProductsLanding.css';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const ProductsLanding = () => {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductDetails />} />
      <div className="products-landing-bg">
        <TissueMotion />
        <section className="products-hero">
          <h1 className="products-hero-title">Premium Engine Oils & Lubricants</h1>
          <p className="products-hero-desc">
            Experience advanced protection, cleaner engines, and peak performance with our modern formulations for every vehicle type.
          </p>
          <a href="#product-list" className="products-hero-btn">Shop Now</a>
        </section>
        <section id="product-list" className="products-list-section">
          <h2 className="products-list-title">Our Bestsellers</h2>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </Routes>
  );
};

export default ProductsLanding; 