import React from 'react';
import styles from '../css/WhyChooseUs.module.css';

const WhyChooseUs: React.FC = () => {
  return (
    <section className={styles.whyChooseUs}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/64fe7e3455139827f3c685bf6e109a260c95a62903744677a2f52f268203f1d6?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="Airplane interior" className={styles.sectionImage} />
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.highlight}>Why</span> choose us
        </h2>
        <p className={styles.sectionDescription}>
          Experience the skies like never before with QAirline.
        </p>
        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            Enjoy spacious seating, enhanced legroom, and a relaxing atmosphere for a truly restful journey.
          </li>
          <li className={styles.featureItem}>
            We prioritize punctuality, ensuring you arrive at your destination on schedule, every time.
          </li>
          <li className={styles.featureItem}>
            Our friendly, attentive crew is here to make your experience smooth and enjoyable from start to finish.
          </li>
          <li className={styles.featureItem}>
            From gourmet meals to onboard entertainment, we cater to all your travel needs.
          </li>
        </ul>
        <p className={styles.conclusion}>
          Fly with us and discover why thousands of travelers around the world choose QAirline as their preferred airline, 
          where every journey is marked by comfort, convenience, and an exceptional level of service that redefines your travel experience.
        </p>
      </div>
      <div className={styles.ratingBadge}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5efd7477a24f231e70c592c4da62acff7602a6a4b4064f2550b1706a61e3eba?placeholderIfAbsent=true&apiKey=f8ff8e6c001546d0b8b7d8599eb812e4" alt="" className={styles.ratingIcon} />
        <span className={styles.ratingScore}>4.92</span>
      </div>
    </section>
  );
};

export default WhyChooseUs;