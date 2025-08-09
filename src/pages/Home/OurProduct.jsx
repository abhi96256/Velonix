import React, { useRef, useEffect, useState } from 'react';
import './OurProduct.css';
import './ProductCard.css';
import ourProductVideo from '../../assets/OurProduct.mp4';
// Removed background visuals; keeping hero as plain black with text only
import productsData from '../../data/products';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Lottie from 'lottie-react';
import DeliveryLottie from '../../assets/Delivery.json';
import QualityLottie from '../../assets/Quality.json';
import PaymentLottie from '../../assets/Payment.json';
import HeroLottie from '../../assets/Video.json';
import allIcon from '../../assets/All.png';
import tissueIcon from '../../assets/Tissue.png';
import napkinIcon from '../../assets/Napkin.png';
import towelIcon from '../../assets/Towel.png';
import wipesIcon from '../../assets/Wipes.png';
import faceIcon from '../../assets/Face.png';
import WishlistIcon from '../../assets/Wishlist.png';
import CartIcon from '../../assets/Cart.png';
import { useNavigate } from 'react-router-dom';

// Replace the hardcoded products array with imported data
// const products = [
//   {
//     id: 1,
//     name: 'Classic Handbag',
//     image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
//     price: '£329.00',
//   },
//   {
//     id: 2,
//     name: 'Modern Crossbody',
//     image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
//     price: '£199.00',
//   },
//   {
//     id: 3,
//     name: 'Designer Backpack',
//     image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
//     price: '£279.00',
//   },
//   {
//     id: 4,
//     name: 'Premium Satchel',
//     image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
//     price: '£349.00',
//   },
// ];

const promoImg = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80';

const ProductsSection = () => {
  const videoRef = useRef(null);
  const promoRef = useRef(null);
  const videoCardRef = useRef(null);
  const [promoZoom, setPromoZoom] = useState(false);
  const [promoInView, setPromoInView] = useState(false);
  const [videoInView, setVideoInView] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [showPromoText, setShowPromoText] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [menuOpenCategory, setMenuOpenCategory] = useState(null);
  const speechRef = useRef(null);
  const navigate = useNavigate();

  // Category navigation for Featured Products
  const categories = ['All', 'Engine Oils', 'Hydraulic Oils', 'Gear Oils', 'ATF', 'Coolants & Fluids'];
  const brandOptions = {
    'Engine Oils': ['All', 'Castrol', 'Servo', 'HP', 'Others'],
    'Hydraulic Oils': ['All', 'Castrol', 'Servo', 'HP', 'Others'],
    'Gear Oils': ['All', 'Castrol', 'Servo', 'HP', 'Others'],
    'ATF': ['All', 'Castrol', 'Servo', 'HP', 'Others'],
    'Coolants & Fluids': ['All', 'Castrol', 'Servo', 'HP', 'Others'],
  };

  useEffect(() => {
    setSelectedBrand('All');
  }, [activeFilter]);

  const filteredProducts = (
    activeFilter === 'All' ? productsData : productsData.filter((p) => p.category === activeFilter)
  ).filter((p) => selectedBrand === 'All' || p.brand === selectedBrand || (selectedBrand === 'Others' && !['Castrol','Servo','HP'].includes(p.brand)));

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Intersection Observer for promo card zoom and entrance
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setPromoZoom(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (promoRef.current) observer.observe(promoRef.current);
    return () => { if (promoRef.current) observer.unobserve(promoRef.current); };
  }, []);

  // Entrance animation for both cards
  useEffect(() => {
    const promoObs = new window.IntersectionObserver(
      ([entry]) => setPromoInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const videoObs = new window.IntersectionObserver(
      ([entry]) => setVideoInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (promoRef.current) promoObs.observe(promoRef.current);
    if (videoCardRef.current) videoObs.observe(videoCardRef.current);
    return () => {
      if (promoRef.current) promoObs.unobserve(promoRef.current);
      if (videoCardRef.current) videoObs.unobserve(videoCardRef.current);
    };
  }, []);

  // Parallax hover for promo card
  const handlePromoMouseMove = (e) => {
    const rect = promoRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // max 10px
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setParallax({ x, y });
  };
  const handlePromoMouseLeave = () => setParallax({ x: 0, y: 0 });

  // Animate 25% every time promo card comes into view
  useEffect(() => {
    if (!promoRef.current) return;
    let timeout;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPromoText(false);
          timeout = setTimeout(() => setShowPromoText(true), 300); // delay for entrance
        } else {
          setShowPromoText(false);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(promoRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <>
      <Header />
      <section className="product-section-dark">
        <div
          className="product-top-banner video-banner"
          style={{ backgroundColor: '#000' }}
        >
          <div className="banner-content video-banner-content advanced-hero-content">
            <button
              className="voice-btn"
              onClick={() => {
                if (isSpeaking) {
                  window.speechSynthesis.cancel();
                  setIsSpeaking(false);
                } else {
                  const msg = new window.SpeechSynthesisUtterance('Powering Performance. Protecting Engines. Explore our high‑performance engine oils and lubricants—engineered to reduce wear, keep engines cleaner, and maximize efficiency for bikes, cars, and commercial vehicles.');
                  msg.onend = () => setIsSpeaking(false);
                  speechRef.current = msg;
                  window.speechSynthesis.speak(msg);
                  setIsSpeaking(true);
                }
              }}
              title={isSpeaking ? "Mute/Stop" : "Listen to this section"}
            >
              {isSpeaking ? "🔇" : "🔊"}
            </button>

            <h3 className="banner-title-advanced">
              <span className="sparkle-icon">✨</span>
              Powering Performance. Protecting Engines.
            </h3>
            <p className="banner-desc-advanced">
              Explore our high‑performance engine oils and lubricants—formulated to fight wear, keep engines cleaner, and deliver maximum efficiency.<br />
              Trusted for bikes, cars, and commercial vehicles.
            </p>
            <div className="banner-stats">
              <div className="stat"><span>API</span> Certified</div>
              <div className="stat"><span>High</span> Viscosity Index</div>
              <div className="stat"><span>10,000+</span> Engines Protected</div>
            </div>
            <div className="banner-testimonial">
              <span>"Engine runs smoother and quieter — best oil change yet."</span>
              <span className="stars">★★★★★</span>
            </div>
          </div>
          <div className="hero-lottie">
            <Lottie
              animationData={HeroLottie}
              loop={true}
              style={{ width: 560, maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
        {/* Filter Bar (moved here) */}
       
        {/* Featured Products header row with categories inline */}
        <div
          className="product-section-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 16,
          }}
        >
          <h2 className="product-section-title" style={{ margin: 0 }}>Featured Products</h2>
          <div
            className="categories-row"
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 5,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat}
                onMouseEnter={() => setMenuOpenCategory(cat)}
                onMouseLeave={() => setMenuOpenCategory(null)}
                style={{ position: 'relative', display: 'inline-block' }}
              >
                <button
                  onClick={() => {
                    setActiveFilter(cat);
                    setMenuOpenCategory((prev) => (prev === cat ? null : cat));
                  }}
                  className={`category-pill ${activeFilter === cat ? 'is-active' : ''}`}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    letterSpacing: '0.2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span aria-hidden style={{ fontSize: 12, opacity: 0.8 }}>▾</span>
                  )}
                </button>

                {cat !== 'All' && menuOpenCategory === cat && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '110%',
                      left: 0,
                      background: '#0f0f0f',
                      border: '1px solid #333',
                      borderRadius: 10,
                      padding: '6px',
                      minWidth: 150,
                      boxShadow: '0 8px 18px rgba(0,0,0,0.5)',
                      zIndex: 10,
                    }}
                  >
                    {(brandOptions[cat] || ['All']).map((opt) => (
                      <div
                        key={opt}
                        onClick={() => {
                          setActiveFilter(cat);
                          setSelectedBrand(opt);
                          setMenuOpenCategory(null);
                        }}
                        className={`brand-menu-item ${selectedBrand === opt && activeFilter === cat ? 'is-selected' : ''}`}
                        style={{
                          padding: '8px 10px',
                          borderRadius: 8,
                          cursor: 'pointer',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="product-grid-dark">
          {filteredProducts.slice(0, 4).map((product) => (
            <div className="product-card-dark" key={product.id}>
              <div className="product-image-container">
                <img 
                  className="product-image-dark" 
                  src={product.image} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "public/images/img_image_768x325.png";
                  }}
                  loading="lazy"
                />
              </div>
              <div className="product-card-actions">
                <button
                  className="shop-now-btn"
                  onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
                >
                  View-Details
                </button>
              </div>
            </div>
          ))}
        </div>

       

        {/* Mid-Section: Two Cards Side by Side, edge-to-edge images, overlays */}
        <div className="product-mid-row exact-match">
          {/* Promo Card with parallax, shine, entrance, zoom */}
          <div
            ref={promoRef}
            className={`mid-card promo-mid-card exact-match-promo${promoZoom ? ' zoom-animate' : ''}${promoInView ? ' card-in-view' : ''}`}
            style={{
              backgroundImage: `url('/images/img_rectangle_17_1.png')`,
              backgroundPosition: `${50 + parallax.x}% ${50 + parallax.y}%`,
            }}
            onMouseMove={handlePromoMouseMove}
            onMouseLeave={handlePromoMouseLeave}
          >
            <div className="mid-card-overlay"></div>
            <div className="shine-sweep"></div>
            <div className="mid-card-content-overlay promo-text-entrance">
              <div className="promo-offer-text">
                EXTRA <span className={`promo-offer-highlight${showPromoText ? ' show' : ''}`}>25%</span> OFF
              </div>
              <p className="mid-card-desc-overlay">Special offer on {productsData[4].name}. Don't miss out!</p>
            </div>
      </div>
          {/* Video Card with scale, caption slide, entrance */}
          <div
            ref={videoCardRef}
            className={`mid-card video-mid-card exact-match-video${videoInView ? ' card-in-view' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mid-card-overlay"></div>
            <video
              className="mid-card-video-bg"
              src={ourProductVideo}
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              style={{objectFit: 'cover', width: '100%', height: '100%'}}
            />
            <div className="mid-card-content-below video-caption-slide">
              <p className="mid-card-desc-below">Watch our latest <span className="highlight-yellow">product</span> video</p>
            </div>
          </div>
        </div>


        {/* Modern Info Bar */}
        <div className="modern-info-bar">
          <div className="info-bar-item">
            {/* Fast Delivery Lottie */}
            <span className="info-bar-icon" aria-label="Fast Delivery">
              <Lottie animationData={DeliveryLottie} loop={true} style={{ height: 70, width: 70 }} />
            </span>
            <div className="info-bar-text">
              <h3>Fast Delivery</h3>
              <p>Get your order in just 24 hours</p>
            </div>
          </div>
          <div className="info-bar-item">
            {/* Quality Guarantee Lottie */}
            <span className="info-bar-icon" aria-label="Quality Guarantee">
              <Lottie animationData={QualityLottie} loop={true} style={{ height: 70, width: 70 }} />
            </span>
            <div className="info-bar-text">
              <h3>Quality Guarantee</h3>
              <p>Crafted with premium materials</p>
            </div>
          </div>
          <div className="info-bar-item">
            {/* Secure Payment Lottie */}
            <span className="info-bar-icon" aria-label="Secure Payment">
              <Lottie animationData={PaymentLottie} loop={true} style={{ height: 70, width: 70 }} />
            </span>
            <div className="info-bar-text">
              <h3>Secure Payment</h3>
              <p>100% secure payment</p>
            </div>
          </div>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default ProductsSection;