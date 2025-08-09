/*import React, { useState } from 'react';
import './PartnersSection.css';

const partners = [
  { name: 'STARBUCKS', logo: '/images/img_starbucks.png', color: 'starbucks' },
  { name: 'Walmart', logo: '/images/img_walmart.svg', color: 'walmart' },
  { name: "McDonald's", logo: '/images/img_mcdonalds.png', color: 'mcdonalds' },
  { name: 'Nestle', logo: '/images/img_nestl.svg', color: 'nestle' },
  { name: 'Pepsi', logo: '/images/img_pepsi.svg', color: 'pepsi' },
];

// Duplicate the partners to create a continuous flow
const allPartners = [...partners, ...partners];

const partnerStyle = {
  color: '#ffea00',
  fontWeight: 'bold',
  fontSize: '2.25rem', // text-4xl (Figma-like)
  lineHeight: 1,
  verticalAlign: 'middle',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'inherit',
  letterSpacing: 0,
  minWidth: 'fit-content',
};
const logoStyle = {
  height: '2.25rem', // match text size
  width: 'auto',
  filter: 'brightness(0) saturate(100%) invert(91%) sepia(100%) saturate(7480%) hue-rotate(2deg) brightness(104%) contrast(104%)',
  display: 'inline-block',
  verticalAlign: 'middle',
};

const PartnersSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (name, idx) => {
    setIsPaused(true);
    setHoveredItem(name);
    console.log("Hovering over:", name); // Debug logging
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setHoveredItem(null);
  };

  return (
    <section className="partners-section">
      <div className="container mx-auto px-5">
        
        /*<h3 className="text-[#ffea00] text-3xl font-bold text-center mb-8">Our Partners</h3>

       
       /* <div 
          className={`partners-slider ${isPaused ? 'paused' : ''}`}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="partners-track">
            {allPartners.map((partner, idx) => (
            <span
                key={`${partner.name}-${idx}`}
                className={`partner-item ${hoveredItem === partner.name ? `hovered ${partner.color}-color` : ''}`}
                onMouseEnter={() => handleMouseEnter(partner.name, idx)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={partner.logo}
                  alt={partner.name || 'partner logo'}
                  className="partner-logo"
                />
            </span>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;*/