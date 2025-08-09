import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import FacebookIcon from '../../assets/Facebook.png';
import TwitterIcon from '../../assets/Twitter.png';
import InstaIcon from '../../assets/Insta.png';
import Lottie from 'lottie-react';
import ScrollLottie from '../../assets/Scroll.json';
import BackgroundImage from '../../assets/Bg.png';

const word = "VELONIX";
const DOT_SIZE = window.innerWidth <= 480 ? 4 : 8;
const DOT_GAP = window.innerWidth <= 480 ? 2 : 4;
const GRID_ROWS = 8;
const GRID_COLS = 6;
const LETTER_SIZE = window.innerWidth <= 480 ? 40 : 80;
const LETTER_GAP = window.innerWidth <= 480 ? 8 : 16;

// Simple pixel font for A-Z (6x8 grid, 1=dot, 0=empty)
const PIXEL_FONT = {
  M: [
    '100001',
    '110011',
    '101101',
    '100001',
    '100001',
    '100001',
    '100001',
    '100001',
  ],
  E: [
    '111111',
    '100000',
    '100000',
    '111110',
    '100000',
    '100000',
    '100000',
    '111111',
  ],
  L: [
    '100000',
    '100000',
    '100000',
    '100000',
    '100000',
    '100000',
    '100000',
    '111111',
  ],
  A: [
    '011110',
    '100001',
    '100001',
    '100001',
    '111111',
    '100001',
    '100001',
    '100001',
  ],
  N: [
    '100001',
    '110001',
    '101001',
    '100101',
    '100011',
    '100001',
    '100001',
    '100001',
  ],
  I: [
    '001000',
    '001000',
    '001000',
    '001000',
    '001000',
    '001000',
    '001000',
    '001000',
  ],
  V: [
    '100001',
    '100001',
    '100001',
    '010010',
    '010010',
    '001100',
    '001100',
    '001100',
  ],
  O: [
    '011110',
    '100001',
    '100001',
    '100001',
    '100001',
    '100001',
    '100001',
    '011110',
  ],
  X: [
    '100001',
    '010010',
    '001100',
    '001100',
    '001100',
    '001100',
    '010010',
    '100001',
  ],
};

const getRandomScreenPosition = () => ({
  x: Math.random() * 100 - 10, // -10vw to 90vw
  y: Math.random() * 60 - 10   // -10vh to 50vh
});

const HeroSection = () => {
  const [assembled, setAssembled] = useState(false);
  // For each letter, for each dot, store a random origin
  const [dotOrigins] = useState(
    word.split('').map(letter => {
      const grid = PIXEL_FONT[letter];
      let dots = [];
      for (let row = 0; row < GRID_ROWS; row++) {
        for (let col = 0; col < GRID_COLS; col++) {
          if (grid && grid[row][col] === '1') {
            dots.push(getRandomScreenPosition());
          }
        }
      }
      return dots;
    })
  );

  useEffect(() => {
    const timeout = setTimeout(() => setAssembled(true), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="background-image">
        <img src={BackgroundImage} alt="Background" />
      </div>
      
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="#" className="social-icon">
          <img className="icon-yellow" src="/images/img_facebook.svg" alt="Facebook" />
          <img className="icon-real" src={FacebookIcon} alt="Facebook Real" />
        </a>
        <a href="#" className="social-icon">
          <img className="icon-yellow" src="/images/img_twitter.svg" alt="Twitter" />
          <img className="icon-real" src={TwitterIcon} alt="Twitter Real" />
        </a>
        <a href="#" className="social-icon">
          <img className="icon-yellow" src="/images/img_instagram.svg" alt="Instagram" />
          <img className="icon-real" src={InstaIcon} alt="Instagram Real" />
        </a>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="content-container">
          <p className="iam-text">We are</p>
          <br />
          <div className="life-row">
            {word.split('').map((char, letterIdx) => {
              const grid = PIXEL_FONT[char];
              let dotIdx = 0;
              return (
                <span key={letterIdx} className="letter-container">
                  {grid && grid.map((row, rowIdx) =>
                    row.split('').map((cell, colIdx) => {
                      if (cell === '1') {
                        const origin = dotOrigins[letterIdx][dotIdx];
                        let left, top;
                        if (assembled) {
                          left = colIdx * (DOT_SIZE + DOT_GAP);
                          top = rowIdx * (DOT_SIZE + DOT_GAP);
                        } else {
                          left = `${origin.x}vw`;
                          top = `${origin.y}vh`;
                        }
                        dotIdx++;
                        return (
                          <span
                            key={colIdx + '-' + rowIdx}
                            className="dot"
                            style={{
                              left,
                              top,
                              width: `${DOT_SIZE}px`,
                              height: `${DOT_SIZE}px`,
                              transition: `all 1s cubic-bezier(.68,-0.55,.27,1.55) ${(rowIdx + colIdx) * 0.04 + letterIdx * 0.1}s`
                            }}
                          />
                        );
                      }
                      return null;
                    })
                  )}
                </span>
              );
            })}
          </div>
          <div className="environmentalist-text">
            <p>
              <br />
              <span className="your-text">Your</span>
              Trusted Lubrication Partner
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <p className="scroll-text">Scroll</p>
        <div style={{ width: 60, height: 90 }}>
          <Lottie animationData={ScrollLottie} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;