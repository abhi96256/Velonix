import React from 'react';
import { motion } from 'framer-motion';

const TissueMotion = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden', position: 'relative', height: '180px', background: 'transparent' }}>
      <motion.svg
        width="100%"
        height="180"
        viewBox="0 0 1440 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ x: 0 }}
        animate={{ x: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <motion.path
          d="M0 80 Q 360 0 720 80 T 1440 80 V180 H0Z"
          fill="#fff"
          stroke="#e0e0e0"
          strokeWidth="2"
          animate={{
            d: [
              'M0 80 Q 360 0 720 80 T 1440 80 V180 H0Z',
              'M0 80 Q 360 40 720 40 T 1440 80 V180 H0Z',
              'M0 80 Q 360 120 720 80 T 1440 80 V180 H0Z',
              'M0 80 Q 360 0 720 80 T 1440 80 V180 H0Z',
            ],
          }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  );
};

export default TissueMotion; 