import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import contactLottie from '../assets/contact.json';
import './ContactUs.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import earthVideo from '../assets/Earth.mp4';

// Add this WaveSVG component after imports
const WaveSVG = ({ duration = '2s' }) => (
  <svg viewBox="0 0 120 28" preserveAspectRatio="none">
    <path d="M0,10 Q30,20 60,10 T120,10 V28 H0 Z" fill="#fffbe6" opacity="0.5">
      <animate 
        attributeName="d"
        dur={duration}
        repeatCount="indefinite"
        values="
          M0,10 Q30,20 60,10 T120,10 V28 H0 Z;
          M0,12 Q30,8 60,12 T120,12 V28 H0 Z;
          M0,10 Q30,20 60,10 T120,10 V28 H0 Z
        "
      />
    </path>
  </svg>
);

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [waveFast, setWaveFast] = useState(false);
  const [newsletterWaveFast, setNewsletterWaveFast] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xyzjzkzl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' }); // Clear form
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <>
      {/* Earth video background - fixed for whole page */}
      <video
        className="earth-bg-video"
        src={earthVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'blur(1px)',
          pointerEvents: 'none',
        }}
      />
      {/* Overlay for readability */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.65)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      {/* All content above video */}
      <div style={{position: 'relative', zIndex: 1}}>
        <Header />
        <div className="contactus-bg">
          <motion.div
            className="contactus-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{position: 'relative', zIndex: 2}}
          >
            <div className="contactus-illustration">
              <Lottie animationData={contactLottie} loop={true} className="contactus-lottie" />
            </div>
            <form className="contactus-form" onSubmit={handleSubmit} action="https://formspree.io/f/xyzjzkzl" method="POST">
              <h2 className="contactus-title">Contact With Us</h2>
              <p className="contactus-desc">Here's the part where we listen. Tell us all about it.</p>
              <div className="contactus-field">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="contactus-input"
                  autoComplete="off"
                />
                <label className={form.name ? 'filled' : ''}>Name</label>
              </div>
              <div className="contactus-field">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="contactus-input"
                  autoComplete="off"
                />
                <label className={form.email ? 'filled' : ''}>Email</label>
              </div>
              <div className="contactus-field">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="contactus-input"
                  rows={3}
                />
                <label className={form.message ? 'filled' : ''}>Your Message</label>
              </div>
              <motion.button
                type="submit"
                className="contactus-btn aboutus-link-btn"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300 }}
                disabled={submitted}
              >
                {submitted ? 'Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
        {/* Contact Info & FAQ Row */}
        <div className="contactus-extra-row">
          <div className="contactus-info-section">
            <h3>Contact Information</h3>
            <ul>
              <li><strong>Phone:</strong> +91 7317228662</li>
              <li><strong>Email:</strong> info@melanieindia.com</li>
              <li><strong>Address:</strong> SCO 30, 2nd Floor, Omaxe World Street, Sector-79, Greater Faridabad, Haryana - 121006</li>
            </ul>
          </div>
          <div className="contactus-faq-section">
            <h3>Frequently Asked Questions</h3>
            <details>
              <summary>How quickly will I get a response?</summary>
              <p>We usually reply within 24 hours on business days.</p>
            </details>
            <details>
              <summary>Can I track my order?</summary>
              <p>Yes, you will receive a tracking link after your order is shipped.</p>
            </details>
            <details>
              <summary>How do I cancel or change my order?</summary>
              <p>Contact us as soon as possible and we'll help you out!</p>
            </details>
          </div>
        </div>
        {/* Newsletter Signup Section */}
        <div className="contactus-newsletter-section">
          <h3>Subscribe to our Newsletter</h3>
          <form className="newsletter-form" onSubmit={e => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input type="email" placeholder="Your Email" required className="newsletter-input" />
            <button
              type="submit"
              className="newsletter-btn aboutus-link-btn"
            >
              Subscribe
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs; 