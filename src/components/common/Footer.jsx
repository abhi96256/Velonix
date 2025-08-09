import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import MelanieBlackLogo from '../../assets/MelanieBlack.png';

import InstaIcon from '../../assets/instagram.png';
import LinkedInIcon from '../../assets/linkedin.png';
import FacebookIcon from '../../assets/facebook1.png';

const iconStyle = {
  width: '36px',
  height: '36px',
  objectFit: 'contain',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
};
const iconHoverStyle = {
  transform: 'scale(1.18)',
  boxShadow: '0 2px 12px #18181833',
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Contact Details */}
        <div className="brand-section">
          <img src={MelanieBlackLogo} alt="Melanie Logo" className="footer-logo" />
          <div style={{ marginTop: '0.5rem',fontSize: '1.1rem' }}>
            <div className="contact-details-container"></div>
       
          <div className="contact-details-heading" style={{ fontWeight: 500, marginBottom: '13px', marginLeft: '-197px' }}>
  Contact Details
</div>

            <ul className="link-list">
              <li>+91 7317228662</li>
              <li className='cor3'>info@melanieindia.com</li>
          
            </ul>
          </div>
        </div>
        <div className="footer-section-separator" />
        {/* Office Addresses */}
        <div className="section1">
          <div style={{ fontWeight: 600, marginBottom:  71 }}></div>
          <ul className="link-list1">
          
            <li style={{marginBottom: '9px',fontSize: '1.1rem',fontWeight: 499}}>Corporate Office</li>

            <li style={{marginBottom: '9px'}}>Address : SCO 30 2nd Floor, Omax World Street</li>
            <li style={{marginBottom: '9px'}}>Sector 70, Greater Faridabad</li>
            <li style={{marginBottom: '9px'}}>121006</li>
         
          </ul>
        </div>
        <div className="footer-section-separator1" />
        {/* Company, Products, Legal */}
        <div className="section">

          <br/>
          <ul className="link-list2">
  <li className="link-title" style={{fontSize: '1.1rem',fontWeight: 499}}>Quick links</li>
  <li><Link to="/" className="link">Home</Link></li>
  <li><Link to="/about" className="link">About Us</Link></li>
  <li><Link to="/products" className="link">Our Product</Link></li>
</ul>
        
        </div>
        <div className="footer-section-separator2" />
        {/* Social Icons with PNGs from public/images in the fourth column */}
        <div className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="contact-details-heading1"style={{ fontWeight: 500, fontSize: '1.1rem', color: '#181818', marginTop: '49px', letterSpacing: '0.5px', marginRight: '140px' }}>Follow us</div>
          <div   className="contact-details-heading2" style={{ display: 'flex', gap: '24px', marginTop: '20px', marginRight: '80px' }}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
              onMouseEnter={e => e.currentTarget.firstChild.style.transform = 'scale(1.18)'}
              onMouseLeave={e => e.currentTarget.firstChild.style.transform = 'scale(1)'}
            >
              <img src={FacebookIcon} alt="Facebook" style={{ ...iconStyle, background: 'none', boxShadow: 'none', filter: 'drop-shadow(0 1px 2px #18181822)' }} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
              onMouseEnter={e => e.currentTarget.firstChild.style.transform = 'scale(1.18)'}
              onMouseLeave={e => e.currentTarget.firstChild.style.transform = 'scale(1)'}
            >
              <img src={InstaIcon} alt="Instagram" style={{ ...iconStyle, background: 'none', boxShadow: 'none', filter: 'drop-shadow(0 1px 2px #18181822)' }} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"
              onMouseEnter={e => e.currentTarget.firstChild.style.transform = 'scale(1.18)'}
              onMouseLeave={e => e.currentTarget.firstChild.style.transform = 'scale(1)'}
            >
              <img src={LinkedInIcon} alt="LinkedIn" style={iconStyle} />
           
            </a>
           
          </div>
          </div>
        </div>
        <div className='footer-copyright'>
        <div className="copyright">
  <p>© {currentYear} Melanie. All rights reserved.</p>
  <p>Crafted by <span className="crafted-by">MayDiv Infotech</span></p>
</div>
        </div>
    
    </footer>
  );
};

export default Footer;