import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import RoadMap from '../RoadMap';
import PurchaseGrid from './PurchaseGrid';

function Home() {
  return (
    <>
      <HeroSection />
      <PurchaseGrid/>
      <Cards />
      <RoadMap/>
      <Footer />
    </>
  );
}

export default Home;
