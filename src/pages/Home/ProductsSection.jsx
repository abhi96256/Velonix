import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductsSection.css';


const ProductsSection = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'Engine Oils',
      image: '/images/img_rectangle_17.png',
      link: '/products/engine-oils'
    },
    {
      id: 2,
      name: 'Gear & Transmission',
      image: '/images/img_image_768x325.png',
      link: '/products/gear-transmission'
    },
    {
      id: 3,
      name: 'Coolants & Fluids',
      image: '/images/img_rectangle_17_1.png',
      link: '/products/coolants-fluids'
    }
  ];

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header-row">
          <h2 className="products-title">Explore Our Lubricants</h2>
          <Link to="/products" className="products-explore-btn">
            <span className="products-explore-text">Explore Listings</span>
            <img src="/images/img_arrowright.svg" alt="Arrow right" className="products-explore-arrow" />
          </Link>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="products-card">
              <div className="products-card-inner">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="products-card-img"
                />
                <div className="products-card-bottom-row">
                  <h3 className="products-card-title">{product.name}</h3>
                  <button
                    className="products-card-link"
                    style={{ background: '#ffea00', border: '2px solid #000', borderRadius: '9999px', width: '37px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '7rem', cursor: 'pointer', padding: 0,fontSize: '0.7rem',fontWeight: '100' }}
                    onClick={() => navigate(`/products`)}
                  >
                    <img src="/images/img_arrowright.svg" alt="View product" className="products-card-link-arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="products-slider-row">
          <img src="/images/img_slider.svg" alt="Slider" className="products-slider-img" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;