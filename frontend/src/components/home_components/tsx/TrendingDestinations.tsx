import React from 'react';
import styles from '../css/TrendingDestinations.module.css';

const TrendingDestinations: React.FC = () => {
  return (
    <section className={styles.trendingDestinations}>
      <h2 className={styles.sectionTitle}>
        Trending <span className={styles.highlight}>destination</span> now days
      </h2>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3950366f2eb4d86340d894b8c8b2265c91ae8859dbd16ac26d9013ed40e3f14e?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="Map of trending destinations" className={styles.destinationMap} />
    </section>
  );
};

export default TrendingDestinations;