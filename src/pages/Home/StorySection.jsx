import React, { useState, useEffect } from 'react';
import './StorySection.css';

const StorySection = () => {
  const [showFull, setShowFull] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const fullText = `Our journey began with a vision to revolutionize the lubricant industry by delivering products that combine maximum performance with minimum environmental impact. We recognized the growing need for high-quality engine, gear, and hydraulic oils that not only protect machines but also respect the planet.

From day one, our mission has been clear — to engineer advanced lubrication solutions that extend equipment life, improve efficiency, and reduce environmental harm. By embracing innovative formulations, eco-conscious practices, and uncompromising quality, we aim to power your journey while preserving our world for generations to come.`;
  const shortText = fullText.split('. ').slice(0, 2).join('. ') + '.';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="story-section">
      <div className="story-container">
        <div className="story-grid">
          <div>
            <h3 className="story-heading">OUR STORY</h3>
            <h2 className="story-title">
            Our Drive Towards Sustainable Performance
            </h2>
            <p className="story-desc">
              {isMobile ? (showFull ? fullText : shortText) : fullText}
            </p>
           
            {isMobile && showFull && (
              <button className="story-read-more-btn" onClick={() => setShowFull(false)}>
                Read Less
              </button>
            )}
          </div>
          <div className="story-img-col">
            <img 
              src="/images/img_image.png" alt="Engine illustration" className="story-main-img" />
            <div className="story-badge-outer">
              <div className="story-badge-inner">
                <img src="/images/img_union.svg" alt="Zero Waste badge" className="story-badge-img" />
                <p className="story-badge-text">
                  Zero<br />Waste
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;