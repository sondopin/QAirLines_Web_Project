import React from 'react';
import styles from './AircraftCard.module.css';

interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div className={styles.detailItem}>
    <div className={styles.detailLabel}>{label}:</div>
    <div className={styles.detailValue}>{value}</div>
  </div>
);

interface AircraftCardProps {
  code: string;
  name: string;
  manufacturer: string;
  yearOfManufacture: string;
  model: string;
  numberOfSeats: string;
}

const AircraftCard: React.FC<AircraftCardProps> = ({
  code,
  name,
  manufacturer,
  yearOfManufacture,
  model,
  numberOfSeats,
}) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.aircraftCode}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/46a48c8b9ff00f60649247d210da1156e1c6be66d046811644767b05e8073a87?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" className={styles.icon} alt="" />
          <div className={styles.code}>{code}</div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/7df349b93a200e26f9ceafe6c9a5221fcc47270f738f4bdedeb51ef02ac0ea5c?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" className={styles.logo} alt="Aircraft logo" />
      </header>
      <div className={styles.content}>
        <div className={styles.details}>
          <DetailItem label="Name" value={name} />
          <DetailItem label="Manufacturer" value={manufacturer} />
          <DetailItem label="Year of manufacture" value={yearOfManufacture} />
          <DetailItem label="Model" value={model} />
          <DetailItem label="Number of seats" value={numberOfSeats} />
        </div>
        <div className={styles.viewDetails}>
          <div className={styles.viewDetailsText}>View Details</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/e2cf5c6569bd605e1c4db7849504d35804fbd067c313b999972ecac7404d72cd?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" className={styles.arrowIcon} alt="" />
        </div>
      </div>
    </article>
  );
};

export default AircraftCard;