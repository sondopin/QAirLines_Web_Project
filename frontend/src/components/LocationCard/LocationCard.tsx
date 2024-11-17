import React from 'react';
import styles from './LocationCard.module.css';

interface LocationCardProps {
  titleDark: string;
  titleLight?: string;
  description: string;
}

const LocationCard: React.FC<LocationCardProps> = ({titleDark, titleLight, description}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        {titleDark} <span className={styles.highlight}>{titleLight}</span>
      </h2>
      <hr className={styles.divider} />
      <p className={styles.description}>
        {description}
      </p>
    </section>
  );
};

export default LocationCard;