import React from 'react';
import Lottie from 'lottie-react';
import WhatsappLottie from '../../assets/Whatsapp.json';

const WhatsappChatButton = () => {
  // Responsive size and position: smaller and closer to edge on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 480;
  const size = isMobile ? 60 : 90;
  const right = isMobile ? 10 : 24;

  const handleClick = () => {
    window.open('https://wa.me/917678292078', '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: right,
        zIndex: 1000,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      title="Chat on WhatsApp"
      onClick={handleClick}
    >
      <Lottie animationData={WhatsappLottie} loop={true} style={{ height: size, width: size }} />
    </div>
  );
};

export default WhatsappChatButton; 