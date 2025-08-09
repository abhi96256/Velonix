import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';




import FeaturesSection from './FeaturesSection';
import StorySection from './StorySection';

import ProductsSection from './ProductsSection';
import CtaSection from './CtaSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
      
        <FeaturesSection />
        <StorySection />
       
        <ProductsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;