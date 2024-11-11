import React from 'react';
import LocationCard from '../tsx/LocationCard.tsx';
import styles from '../css/PopularLocations.module.css';

const popularLocations = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/93b6fa43c09ffa271615ab391d3cfaff556060494ac76efe899044d117e6801c?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4",
    name: "Hanoi",
    rating: "4.92",
    description: "Ho Hoan Kiem, Ha Noi",
    price: "$139.00",
    country: "VietNam"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c69df8b4bb0b7ce2031c28f9e95da95c888e5ec890507a38fbbd0ce063c70f1d?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4",
    name: "Destination",
    rating: "4.92",
    description: "Description",
    price: "$Price",
    country: "Country"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/01803de35d7cfb9d4dcbf84e2fba1b5532fed2ef56a252a3995e625f6ac45ada?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4",
    name: "Destination",
    rating: "4.92",
    description: "Description",
    price: "$Price",
    country: "Country"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70f93beba0b96490e23ecdc85f6f365672d6a2d5dfc7940354e07d98285cbfe6?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4",
    name: "Destination",
    rating: "4.92",
    description: "Description",
    price: "$Price",
    country: "Country"
  }
];

const PopularLocations: React.FC = () => {
  return (
    <section className={styles.popularLocations}>
      <h2 className={styles.sectionTitle}>Popular locations</h2>
      <p className={styles.sectionDescription}>
        Tourist and resort destinations are of interest to many people. You should visit once if you have the chance!
      </p>
      <div className={styles.locationGrid}>
        {popularLocations.map((location, index) => (
          <LocationCard key={index} {...location} />
        ))}
      </div>
    </section>
  );
};

export default PopularLocations;