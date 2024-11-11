import React from 'react';
import Header from '../../components/home_components/tsx/Header.tsx';
import Quote from '../../components/home_components/tsx/Quote.tsx';
import PopularLocations from '../../components/home_components/tsx/PopularLocations';
import WhyChooseUs from '../../components/home_components/tsx/WhyChooseUs';
import TrendingDestinations from '../../components/home_components/tsx/TrendingDestinations';
import Feedback from '../../components/home_components/tsx/Feedback';
import Footer from '../../components/home_components/tsx/Footer';
import styles from '../css/Home.module.css';

const AirlineBookingPage: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <main>
        <Quote />
        <PopularLocations />
        <WhyChooseUs />
        <TrendingDestinations />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
};

export default AirlineBookingPage;