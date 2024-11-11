import React from 'react';
import FlightSearch from '../tsx/FlightSearch.tsx';
import styles from '../css/Quote.module.css';

const Quote: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc58a8b20b4b6b67704abdfd26a47a6e12c791b3aa7abe7a2d54db7ce48fc12c?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="" className={styles.backgroundImage} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Wings to Your World</h1>
        <p className={styles.heroDescription}>
          Our mission is to connect people and places with safe, reliable, and comfortable air travel, 
          delivering exceptional service while committing to a sustainable future.
        </p>
        <FlightSearch />
      </div>
    </section>
  );
};

export default Quote;